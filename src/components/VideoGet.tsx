import { ContentDTO } from '../types/dto'
import classes from './VideoGet.module.css'
import { Link } from 'react-router-dom'

interface IVideoGetProps {
  videoGet: ContentDTO
}

const shortTitle = (longTitle: string, maxLength: number) => {
  const shortString = longTitle.substring(0, maxLength)
  return shortString.substring(0, Math.min(shortString.length, shortString.lastIndexOf(' ')))
} //For short video title name

const VideoGet = ({ videoGet }: IVideoGetProps) => {
  const title_length = 20

  return (
    <Link to={`/content/${videoGet.content_id}`}>
      <div className={`${classes.card} bg-white rounded-2xl shadow-md`}>
        <img className={`${classes.image} rounded-t-2xl`} src={videoGet.thumbnail_url} />
        <p className={`${classes.title} mb-3 ml-4`}>{shortTitle(videoGet.video_title, title_length)}</p>
      </div>
    </Link>
  )
}

export default VideoGet
