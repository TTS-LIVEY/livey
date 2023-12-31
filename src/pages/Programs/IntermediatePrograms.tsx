import classes from '../Program2.module.css'
import IntermediateVideos from './IntermediateVideos'

function IntermediatePrograms() {
  return (
    <div className={` ${classes.container} mt-20`}>
      {/*  */}
      <p className={`${classes.Title} `}>Intermediate programs</p>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
        <p className={`col-span-4`}>
          Elevate your fitness with our intermediate program. Refine technique, embrace challenges, and embark on a
          next-level fitness journey.
        </p>
      </div>
      {/*  */}

      {/* <IntermediatePrograms /> */}
      <div className="grid grid-cols-4">
        <IntermediateVideos />
      </div>
    </div>
  )
}

export default IntermediatePrograms
