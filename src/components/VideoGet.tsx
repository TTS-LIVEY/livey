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
    <Link className={classes.card} to={`/content/${videoGet.content_id}`}>
      <img className={classes.image} src={videoGet.thumbnail_url} />
      <p className={classes.title}>{shortTitle(videoGet.video_title, title_length)}</p>
    </Link>
  )
}

export default VideoGet
