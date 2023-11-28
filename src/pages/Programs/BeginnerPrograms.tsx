import BeginnerVideos from './BeginnerVideos'
import classes from '../Program2.module.css'

function BeginnerPrograms() {
  const card = [BeginnerVideos, BeginnerVideos, BeginnerVideos, BeginnerVideos]
  const id = 0
  return (
    <div className={` ${classes.container}`}>
      {/*  */}
      <p className={`${classes.Title} `}>Beginner programs</p>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
        <p className={`col-span-4`}>
          Start your fitness journey with our foundations program. Learn essential techniques and join a supportive
          community for a healthier lifestyle.
        </p>
        <p className="rounded-3xl border-black border px-3 py-1 mx-auto my-auto bg-white hover:bg-gray-200 hover:cursor-pointer">
          View all
        </p>
      </div>
      {/*  */}

      <div className="grid grid-cols-4">
        {card &&
          card.map(() => {
            return <BeginnerVideos key={id} />
          })}
      </div>
    </div>
  )
}

export default BeginnerPrograms
