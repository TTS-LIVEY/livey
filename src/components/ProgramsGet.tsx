import ReactPlayer from 'react-player'
import { ContentDTO } from '../types/dto'
import classes from './VideoGet.module.css'

interface IProgramsGetProps {
  programsGet: ContentDTO
}

const shortTitle = (longTitle: string, maxLength: number) => {
  const shortString = longTitle.substring(0, maxLength)
  return shortString.substring(0, Math.min(shortString.length, shortString.lastIndexOf(' ')))
} //For short video title name

const ProgramsGet = ({ programsGet }: IProgramsGetProps) => {
  const title_length = 20

  return (
    // <Link to={`/content/${programsGet.content_id}`}>
    <div className={`${classes.card} bg-white rounded-2xl shadow-md`}>
      <ReactPlayer className={`${classes.image} rounded-t-2xl`} url={programsGet.video_url} controls={true} />
      <p className={`${classes.title} mb-3 ml-4`}>{shortTitle(programsGet.program_title, title_length)}</p>
    </div>
    // </Link>
  )
}

export default ProgramsGet

// {
//     video_url: string
//     video_type: string
//     body_part: string
//     program_title: string
//     schedule_title: string
//   }
