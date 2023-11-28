import classes from '../Program2.module.css'
import IntermediateVideos from './IntermediateVideos'

function IntermediatePrograms() {
  const card = [IntermediateVideos, IntermediateVideos, IntermediateVideos, IntermediateVideos]
  const id = 0
  return (
    <div className={` ${classes.container} mt-20`}>
      {/*  */}
      <p className={`${classes.Title} `}>Intermediate programs</p>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
        <p className={`col-span-4`}>
          Elevate your fitness with our intermediate program. Refine technique, embrace challenges, and embark on a
          next-level fitness journey.
        </p>
        <p className="rounded-3xl border-black border px-3 py-1 mx-auto my-auto bg-white hover:bg-gray-200 hover:cursor-pointer">
          View all
        </p>
      </div>
      {/*  */}

      {/* <IntermediatePrograms /> */}
      <div className="grid grid-cols-4">
        {card &&
          card.map(() => {
            return <IntermediateVideos key={id} />
          })}
      </div>
    </div>
  )
}

export default IntermediatePrograms
