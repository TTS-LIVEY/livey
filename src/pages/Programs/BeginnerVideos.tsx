import classes from '../Program2.module.css'
import arms from '../../../public/Programs_thumbnail/arms/arms_beginner.png'
import cardio from '../../../public/Programs_thumbnail/cardio/cardio_beginner.png'
import chest from '../../../public/Programs_thumbnail/chest/chest_beginner.png'
import legs from '../../../public/Programs_thumbnail/legs/legs_beginner.png'

function BeginnerVideos() {
  return (
    <>
      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={arms} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Arms</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Arms workout for beginner</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={chest} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Chest</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Chest workout for beginner</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={legs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Legs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Legs workout for beginner</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-10/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Low impact cardio workout</div>
      </div>
      {/*  */}
    </>
  )
}

export default BeginnerVideos
