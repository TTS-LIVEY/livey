import Navbar from '../components/Navbar/Navbar'
import classes from './Program2.module.css'
import pic from '../assets/programs pic/abs.webp'
import MostPopular from './Programs/MostPopular'
import Footer from '../components/Footer/Footer'
import IntermediatePrograms from './Programs/IntermediatePrograms'
import BeginnerPrograms from './Programs/BeginnerPrograms'
import AdvancePrograms from './Programs/AdvancePrograms'
import OrChooseByBodyParts from './Programs/OrChooseByBodyParts'

function Programs2() {
  return (
    <>
      <Navbar />
      <div className={`${classes.container} flex `}>
        <div>
          <p className={`${classes.Title}`}>Latest Challenges</p>
          {/*  */}
          <div className={`${classes.card} bg-white w-3/4 h-[472px] mx-auto mt-5 p-8 rounded-3xl shadow-md `}>
            <img src={pic} className={`mx-auto rounded-3xl`} />
            <div className={`${classes.Tags} flex gap-3 mt-5 mb-3 `}>
              <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
              <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Bicep</div>
            </div>
            <div className={`${classes.CardTitle} `}>Arms workout for beginner</div>
          </div>
          {/*  */}
        </div>

        <div className={` col-span-2 w-4/6`}>
          <p className={`${classes.Title} `}>Most Popular</p>

          <MostPopular />
        </div>
      </div>
      <BeginnerPrograms />
      <IntermediatePrograms />
      <AdvancePrograms />
      <OrChooseByBodyParts />
      <Footer />
    </>
  )
}

export default Programs2
