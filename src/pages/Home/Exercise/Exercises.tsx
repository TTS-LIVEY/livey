import classes from './Exercises.module.css'
import cardio from './gif/cardio.gif'
import weight from './gif/weight.gif'
import body from './gif/body.gif'
import equipment from './gif/equipment.gif'

function Exercises() {
  return (
    <>
      {/* Programs */}
      <div className="mx-56 my-10">
        <div className={`${classes.fontLg}`}>Exercises</div>

        <div className=" grid grid-cols-4 gap-4 mt-3">
          <div className={` flex flex-col justify-center items-center ${classes.card} hover:cursor-pointer`}>
            <img src={cardio} alt="Cardio" className={`h-4/6`} />
            <p className={`${classes.fontMd} mt-8`}>Cardio</p>
          </div>

          <div className={` flex flex-col justify-center items-center ${classes.card} hover:cursor-pointer`}>
            <img src={weight} alt="Weight" className={`h-4/6`} />
            <p className={`${classes.fontMd} mt-8`}>Weight training</p>
          </div>

          <div className={` flex flex-col justify-center items-center ${classes.card} hover:cursor-pointer`}>
            <img src={body} alt="Bodyweight" className={`h-4/6`} />
            <p className={`${classes.fontMd} mt-8`}>Bodyweight</p>
          </div>

          <div className={` flex flex-col justify-center items-center ${classes.card} hover:cursor-pointer`}>
            <img src={equipment} alt="Equipment" className={`h-4/6`} />
            <p className={`${classes.fontMd} mt-8`}>Equipment</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exercises
