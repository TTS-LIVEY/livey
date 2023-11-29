import BeginnerVideos from './BeginnerVideos'
import classes from '../Program2.module.css'
import { Link } from 'react-router-dom'

function BeginnerPrograms() {
  return (
    <div className={` ${classes.container}`}>
      {/*  */}
      <div className="flex justify-between">
        <p className={`${classes.Title} `}>Beginner programs</p>
        <Link
          to="/programs/level"
          className={`${classes.viewButton} text-end rounded-3xl border-black border px-3 py-1 my-auto bg-white hover:bg-gray-200 hover:cursor-pointer
        `}
        >
          <p>View all</p>
        </Link>
      </div>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
        <p className={`col-span-4`}>
          Start your fitness journey with our foundations program. Learn essential techniques and join a supportive
          community for a healthier lifestyle.
        </p>
      </div>
      {/*  */}

      <div className="grid grid-cols-4">
        <BeginnerVideos />
      </div>
    </div>
  )
}

export default BeginnerPrograms
