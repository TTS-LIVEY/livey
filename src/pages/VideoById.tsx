import { useNavigate, useParams } from 'react-router-dom'
import useVideoGetById from '../hooks/useVideoGetById'
import classes from './VideoById.module.css'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'

const VideoById = () => {
  const { id } = useParams()
  const { videoById, isError, isLoading } = useVideoGetById(id || '1')
  const navigate = useNavigate()

  if (isLoading || !videoById) return <Loading />

  return (
    <>
      {isError ? navigate('/') : null}
      <div className={classes.container}>
        <p>{videoById.video_title}</p>
        <ReactPlayer url={videoById.video_url} />
      </div>
    </>
  )
}

export default VideoById
