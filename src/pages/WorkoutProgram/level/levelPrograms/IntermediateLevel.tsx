import classes from '../../AllPrograms.module.css'
import abs from '../../../../../public/Programs_thumbnail/abs/abs_intermediate.png'
import arms from '../../../../../public/Programs_thumbnail/arms/arms_intermediate.png'
import back from '../../../../../public/Programs_thumbnail/back/back_intermediate.png'
import cardio from '../../../../../public/Programs_thumbnail/cardio/cardio_intermediate.png'
import chest from '../../../../../public/Programs_thumbnail/chest/chest_intermediate.png'
import glutes from '../../../../../public/Programs_thumbnail/glutes/glutes_intermediate.png'
import legs from '../../../../../public/Programs_thumbnail/legs/legs_intermediate.png'
import shoulder from '../../../../../public/Programs_thumbnail/shoulder/shoulder_intermediate.png'

function IntermediateLevel() {
  return (
    <div className="grid grid-cols-4 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={arms} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Arms</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Getting started for bigger arms</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={chest} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Chest</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate Chest Builder</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={shoulder} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Shoulders</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate Shoulder Boost</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate back Builder Challenge</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={legs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Legs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate Leg Dynamo</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Bubble butt program</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Abs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Models abs workout</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-9/12 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate Cardio workout</div>
      </div>
      {/*  */}
    </div>
  )
}

export default IntermediateLevel
