import classes from '../../AllPrograms.module.css'
import cardio1 from '../../../../../public/Programs_thumbnail/cardio/cardio_beginner.png'
import cardio2 from '../../../../../public/Programs_thumbnail/cardio/cardio_intermediate.png'
import cardio3 from '../../../../../public/Programs_thumbnail/cardio/cardio_advance.png'

function Cardio() {
  return (
    <div className="flex gap-2 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio1} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Low Impact cardio workout</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio2} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate Cardio workout</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={cardio3} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Cardio</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intense cardio workout</div>
      </div>
      {/*  */}
    </div>
  )
}

export default Cardio
