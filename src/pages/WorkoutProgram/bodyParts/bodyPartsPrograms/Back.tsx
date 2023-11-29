import classes from '../../AllPrograms.module.css'
import back1 from '../../../../../public/Programs_thumbnail/back/back_beginner.png'
import back2 from '../../../../../public/Programs_thumbnail/back/back_intermediate.png'
import back3 from '../../../../../public/Programs_thumbnail/back/back_advance.png'

function Back() {
  return (
    <div className="flex gap-2 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back1} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Back workout for beginner</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back2} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Intermediate back Builder Challenge</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={back3} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Back</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Build back like pro athletes</div>
      </div>
      {/*  */}
    </div>
  )
}

export default Back
