import classes from '../../AllPrograms.module.css'
import shoulder1 from '../../../../../public/Programs_thumbnail/shoulder/shoulder_beginner.png'
import shoulder2 from '../../../../../public/Programs_thumbnail/shoulder/shoulder_intermediate.png'
import shoulder3 from '../../../../../public/Programs_thumbnail/shoulder/shoulder_advance.png'

function Shoulder() {
  return (
    <div className="flex gap-2 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder1} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Shoulder</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Shoulder workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder2} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Shoulder</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate Shoulder Boost</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder3} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Shoulder</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Athletes shoulder workout</div>
      </div>
      {/*  */}
    </div>
  )
}

export default Shoulder
