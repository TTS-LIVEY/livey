import classes from '../../Program2.module.css'
import bicep from '../../../assets/programs pic/bicep.png'
import tricep from '../../../assets/programs pic/tricep.png'
import chest from '../../../assets/programs pic/chest.png'

function BicepTricepChest() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={bicep} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Bicep</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={tricep} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Tricep</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={chest} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.BodyPartCardFont} px-5 mt-4`}>Chest</div>
      </div>
      {/*  */}
    </>
  )
}

export default BicepTricepChest
