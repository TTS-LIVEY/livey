import HomeVideos from './HomeVideos'
import classes from './HomePrograms.module.css'
import Stepper from '../Stepper'

function HomePrograms() {
  const vidCard = [1, 2, 3]
  const id = 0
  return (
    <>
      {/* Programs */}
      <div className="mx-56 my-10">
        <div className={`${classes.fontLg}`}>Programs</div>
        <div className={`${classes.fontMd} mt-12 flex justify-between`}>
          <p>Recommended</p>
          {/* view all */}
          <button
            className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white
  hover:bg-white group  rounded-full px-6 py-1 border-2 border-black"
          >
            <span className="w-0 h-0 bg-green-200 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 rounded-full"></span>
            <span
              className={`w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10 ${classes.font2}`}
            >
              View all videos
            </span>
          </button>
        </div>
        {/* Programs */}

        {/* <HomeVideos /> */}
        <div className="flex justify-center px-10 my-8 hover:cursor-pointer gap-20">
          {vidCard.map(() => {
            return <HomeVideos key={id} />
          })}
        </div>

        <div className="flex justify-center mt-14">
          <Stepper />
        </div>
        {/* <HomeVideos /> */}
      </div>
    </>
  )
}

export default HomePrograms
