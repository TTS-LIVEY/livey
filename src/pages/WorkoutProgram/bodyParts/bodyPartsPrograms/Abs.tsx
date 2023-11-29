import classes from '../../AllPrograms.module.css'
import abs1 from '../../../../../public/Programs_thumbnail/abs/abs_beginner.png'
import abs2 from '../../../../../public/Programs_thumbnail/abs/abs_intermediate.png'
import abs3 from '../../../../../public/Programs_thumbnail/abs/abs_advance.png'

function Abs() {
  return (
    <div className="flex gap-2 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs1} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Abs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Abs workout for beginner</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs2} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Abs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Models abs workout</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={abs3} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Abs</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Greek god abs</div>
      </div>
      {/*  */}
    </div>
  )
}

export default Abs
