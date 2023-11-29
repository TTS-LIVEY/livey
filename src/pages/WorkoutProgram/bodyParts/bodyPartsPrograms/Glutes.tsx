import classes from '../../AllPrograms.module.css'
import glutes1 from '../../../../../public/Programs_thumbnail/glutes/glutes_beginner.png'
import glutes2 from '../../../../../public/Programs_thumbnail/glutes/glutes_intermediate.png'
import glutes3 from '../../../../../public/Programs_thumbnail/glutes/glutes_advance.png'

function Glutes() {
  return (
    <div className="flex gap-2 pb-10 pt-3">
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes1} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Glutes workout for beginner</div>
      </div>
      {/*  */}

      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes2} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Intermediate</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Bubble butt program</div>
      </div>
      {/*  */}
      {/*  */}
      <div className={`${classes.card} bg-white w-1/4 mx-auto mt-5 pb-4 rounded-3xl shadow-md`}>
        <img src={glutes3} className={`mx-auto rounded-t-3xl`} />
        <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 px-5`}>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Advance</div>
          <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
        </div>
        <div className={`${classes.CardTitle} px-5`}>Killer butt program</div>
      </div>
      {/*  */}
    </div>
  )
}

export default Glutes
