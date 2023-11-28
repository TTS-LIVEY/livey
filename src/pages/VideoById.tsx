import { useNavigate, useParams } from 'react-router-dom'
import useVideoGetById from '../hooks/useVideoGetById'
import classes from './VideoById.module.css'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'
import useHistoryCreate from '../hooks/useHistoryCreate'
import Navbar from '../components/Navbar/Navbar'

const VideoById = () => {
  const { id } = useParams()
  const { videoById, isError, isLoading } = useVideoGetById(id || '1')
  const navigate = useNavigate()

  useHistoryCreate(id || '1')

  if (isLoading || !videoById) return <Loading />

  return (
    <>
      <Navbar />
      {isError ? navigate('/') : null}
      <div className={`${classes.container} bg-white rounded-3xl pt-6 pb-4`}>
        <p className={`${classes.Title} mb-5`}>{videoById.video_title}</p>
        <ReactPlayer url={videoById.video_url} />

        <div className={`${classes.Tags} flex gap-6 mt-5 mb-3 text-xl`}>
          <div className="rounded-3xl border-black border bg-[#f3f3f3] py-2 px-4">{videoById.video_type}</div>
          <div className="rounded-3xl border-black border bg-[#f3f3f3] py-2 px-4">{videoById.body_part}</div>
        </div>
      </div>
    </>
  )
}

export default VideoById
