import { useNavigate, useParams } from 'react-router-dom'
import useVideoGetById from '../hooks/useVideoGetById'
import classes from './VideoById.module.css'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'
import useHistoryCreate from '../hooks/useHistoryCreate'
import Navbar from '../components/Navbar/Navbar'
import IconButton from '@mui/joy/IconButton'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { useEffect, useState } from 'react'
import useHistoryGet from '../hooks/useHistoryGet'
import axios from 'axios'
import { API_HOST } from '../utils/url'
const VideoById = () => {
  const token = localStorage.getItem('token')
  const { id } = useParams()
  const { videoById, isError, isLoading } = useVideoGetById(id || '1')
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useHistoryCreate(id || '1')

  const { newHistory } = useHistoryGet()
  const historyId = newHistory?.find((data) => {
    return data.contentId === Number(id)
  })
  console.log(historyId)

  useEffect(() => {
    if (historyId !== undefined) {
      setIsFavorite(historyId.is_favorite)
    }
  }, [historyId])

  const favoriteHandler = async () => {
    try {
      await axios.patch(
        `${API_HOST}/history/fav/${historyId?.history_id}`,
        { is_favorite: !historyId?.is_favorite },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )

      window.location.reload()

      const updatedHistory = await axios.get(`${API_HOST}/history/${historyId?.history_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      // Update state with the correct is_favorite status
      setIsFavorite(updatedHistory.data.is_favorite)
    } catch (error) {
      console.error('Error updating favorite status:', error)
    }
  }

  if (isLoading || !videoById) return <Loading />

  return (
    <>
      <Navbar />
      {isError ? navigate('/') : null}
      <div className={`${classes.container} bg-white rounded-3xl pt-6 pb-4 shadow-md`}>
        <p className={`${classes.Title} mb-5`}>{videoById.video_title}</p>
        <ReactPlayer url={videoById.video_url} controls={true} />

        <div className={`${classes.Tags} flex gap-6 mt-5 mb-3 text-xl`}>
          <div className="rounded-3xl border-black border bg-[#f3f3f3] py-2 px-4">{videoById.video_type}</div>
          <div className="rounded-3xl border-black border bg-[#f3f3f3] py-2 px-4">{videoById.body_part}</div>
          {isFavorite ? (
            <IconButton color="danger" onClick={favoriteHandler} size="lg" variant="plain">
              <Favorite />
            </IconButton>
          ) : (
            <IconButton onClick={favoriteHandler} size="lg" variant="plain">
              <FavoriteBorder />
            </IconButton>
          )}
        </div>
      </div>
    </>
  )
}

export default VideoById
