import classes from '../Program2.module.css'
import pic from '../../assets/programs pic/abs.webp'

function IntermediateVideos() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={pic} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Bicep</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Shoulders workout for beginner</div>
      </div>
      {/*  */}
    </>
  )
}

export default IntermediateVideos
