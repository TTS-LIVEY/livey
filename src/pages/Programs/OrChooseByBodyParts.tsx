import 'react-responsive-carousel/lib/styles/carousel.min.css'
import classes from '../Program2.module.css'
import BodyPartsCarousel from './OrChooseByBodyParts/BodyPartsCarousel'

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
