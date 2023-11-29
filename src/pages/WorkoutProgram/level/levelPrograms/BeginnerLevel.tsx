import classes from '../../AllPrograms.module.css'
import abs from '../../../../../public/Programs_thumbnail/abs/abs_beginner.png'
import arms from '../../../../../public/Programs_thumbnail/arms/arms_beginner.png'
import back from '../../../../../public/Programs_thumbnail/back/back_beginner.png'
import cardio from '../../../../../public/Programs_thumbnail/cardio/cardio_beginner.png'
import chest from '../../../../../public/Programs_thumbnail/chest/chest_beginner.png'
import glutes from '../../../../../public/Programs_thumbnail/glutes/glutes_beginner.png'
import legs from '../../../../../public/Programs_thumbnail/legs/legs_beginner.png'
import shoulder from '../../../../../public/Programs_thumbnail/shoulder/shoulder_beginner.png'

function BeginnerLevel() {
  return (
    <div className="grid grid-cols-4 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={arms} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Arms</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Arms workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={chest} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Chest</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Chest workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Shoulders</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Shoulders workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Backs workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={legs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Legs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Legs workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Glutes workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Abs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Abs workout for beginner</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Low Impact cardio workout</div>
      </div>
      {/*  */}
    </div>
  )
}

export default BeginnerLevel
