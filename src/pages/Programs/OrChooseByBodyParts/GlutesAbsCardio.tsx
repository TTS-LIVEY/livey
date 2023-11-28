import classes from '../../Program2.module.css'
import glutes from '../../../assets/programs pic/glutes.png'
import abs from '../../../assets/programs pic/abs.png'
import cardio from '../../../assets/programs pic/cardio.png'

function GlutesAbsCardio() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Glutes</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Abs</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Cardio</div>
      </div>
      {/*  */}
    </>
  )
}

export default GlutesAbsCardio
