import classes from '../Program2.module.css'
import back from '../../../public/Programs_thumbnail/back/back_intermediate.png'
import cardio from '../../../public/Programs_thumbnail/cardio/cardio_intermediate.png'
import glutes from '../../../public/Programs_thumbnail/glutes/glutes_intermediate.png'
import shoulder from '../../../public/Programs_thumbnail/shoulder/shoulder_intermediate.png'

function IntermediateVideos() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Shoulder</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Athletes shoulder workout</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate back Builder Challenge</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Bubble butt program</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate cardio workout</div>
      </div>
      {/*  */}
    </>
  )
}

export default IntermediateVideos
