import classes from '../Program2.module.css'
import abs from '../../../public/Programs_thumbnail/abs/abs_advance.png'
import arms from '../../../public/Programs_thumbnail/arms/arms_advance.png'
import back from '../../../public/Programs_thumbnail/back/back_advance.png'
import cardio from '../../../public/Programs_thumbnail/cardio/cardio_advance.png'

function AdvanceVideos() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Abs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Greek god abs</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={arms} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Arms</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Big arms challenge</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Build back like pro athletes</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intense cardio workout</div>
      </div>
      {/*  */}
    </>
  )
}

export default AdvanceVideos
