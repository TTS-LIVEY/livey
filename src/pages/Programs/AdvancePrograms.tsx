import classes from '../Program2.module.css'
import AdvanceVideos from './AdvanceVideos'
import IntermediateVideos from './IntermediateVideos'

function AdvancePrograms() {
  const card = [IntermediateVideos, IntermediateVideos, IntermediateVideos, IntermediateVideos]
  const id = 0
  return (
    <div className={` ${classes.container} mt-20`}>
      {/*  */}
      <p className={`${classes.Title} `}>Advance programs</p>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
        <p className={`col-span-4`}>
          Conquer advanced workouts, refine skills, and join a dedicated community for peak fitness. Unleash your full
          potential with these programs.
        </p>
        <p className="rounded-3xl border-black border px-3 py-1 mx-auto my-auto bg-white hover:bg-gray-200 hover:cursor-pointer">
          View all
        </p>
      </div>
      {/*  */}

      <div className="grid grid-cols-4">
        {card &&
          card.map(() => {
            return <AdvanceVideos key={id} />
          })}
      </div>
    </div>
  )
}

export default AdvancePrograms
