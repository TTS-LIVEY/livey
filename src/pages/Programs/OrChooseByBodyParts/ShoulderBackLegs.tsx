import classes from '../../Program2.module.css'
import shoulder from '../../../../public/programs pic/shoulder.png'
import back from '../../../../public/programs pic/back.png'
import legs from '../../../../public/programs pic/legs.png'

function ShoulderBackLegs() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Shoulder</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Back</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={legs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Legs</div>
      </div>
      {/*  */}
    </>
  )
}

export default ShoulderBackLegs
