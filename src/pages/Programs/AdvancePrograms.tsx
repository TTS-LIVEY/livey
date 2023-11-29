import classes from '../Program2.module.css'
import AdvanceVideos from './AdvanceVideos'

function AdvancePrograms() {
  return (
    <div className={` ${classes.container} mt-20`}>
      {/*  */}
      <p className={`${classes.Title} `}>Advance programs</p>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
        <p className={`col-span-4`}>
          Conquer advanced workouts, refine skills, and join a dedicated community for peak fitness. Unleash your full
          potential with these programs.
        </p>
      </div>
      {/*  */}

      <div className="grid grid-cols-4">
        <AdvanceVideos />
      </div>
    </div>
  )
}

export default AdvancePrograms
