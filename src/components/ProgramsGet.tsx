import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './ProgramsGet.module.css'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { pink } from '@mui/material/colors'

interface IProgramsGetProps {
  programsGet: ContentDTO
}

// const shortTitle = (longTitle: string, maxLength: number) => {
//   const shortString = longTitle.substring(0, maxLength)
//   return shortString.substring(0, Math.min(shortString.length, shortString.lastIndexOf(' ')))
// }
//For short video title name

const ProgramsGet = ({ programsGet }: IProgramsGetProps) => {
  // const title_length = 20

  return (
    <div className="flex px-3">
      <Checkbox className="" size="medium" />
      <div className={`bg-gray-200 rounded-2xl shadow-md w-11/12 mx-auto flex p-3 hover:bg-gray-300`}>
        <Link to={`/content/${programsGet.content_id}`} className="flex">
          <img className={`${classes.image} rounded-2xl w-1/3`} src={programsGet.thumbnail_url} />

          <p className={`px-4 `}>{programsGet.video_title}</p>
        </Link>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </div>
    </div>
  )
}

export default ProgramsGet

// <Link to={`/content/${programsGet.content_id}`}>

// {
//     video_url: string
//     video_type: string
//     body_part: string
//     program_title: string
//     schedule_title: string
//   }
