import 'react-responsive-carousel/lib/styles/carousel.min.css'
import classes from '../Program2.module.css'
import BodyPartsCarousel from './OrChooseByBodyParts/BodyPartsCarousel'
import { Link } from 'react-router-dom'

function OrChooseByBodyParts() {
  return (
    <div className={` ${classes.container}`}>
      {/*  */}
      <p className={`${classes.Title} `}>Or choose by body parts</p>
      <div className={`${classes.Description} grid grid-cols-5 mt-5 `}>
        <p className={`col-span-4`}>
          Desire bigger arms, Greek god abs, or growth in specific areas? Choose these programs tailored to your goals!
        </p>
      </div>
      {/*  */}

      <BodyPartsCarousel />
      <div className="flex justify-center">
        <Link
          to="/programs/bodyparts"
          className={`${classes.viewButton} text-end rounded-3xl border-black border px-3 py-1 my-auto bg-white hover:bg-gray-200 hover:cursor-pointer
        `}
        >
          <p>View all</p>
        </Link>
      </div>

      {/* <div className="grid grid-cols-4">
        {card &&
          card.map(() => {
            return <BeginnerVideos key={id} />
          })}
      </div> */}
    </div>
  )
}

export default OrChooseByBodyParts
