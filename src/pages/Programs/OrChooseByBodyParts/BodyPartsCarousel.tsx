import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers'
import BicepTricepChest from './BicepTricepChest'
import ShoulderBackLegs from './ShoulderBackLegs'
import GlutesAbsCardio from './GlutesAbsCardio'
import { Carousel } from 'react-responsive-carousel'

function BodyPartsCarousel() {
  return (
    <>
      <div>
        <Carousel
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? 'absolute' : 'hidden'
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowLeftIcon className="w-9 h-9 text-black" sx={{ fontSize: 80 }} />
              </div>
            )
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? 'absolute' : 'hidden'
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowRightIcon className="w-9 h-9 text-black" sx={{ fontSize: 80 }} />
              </div>
            )
          }}
        >
          <div>
            <div className="grid grid-cols-3 w-5/6 mx-auto p-8">
              <BicepTricepChest />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 w-5/6 mx-auto p-8">
              <ShoulderBackLegs />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 w-5/6 mx-auto p-8">
              <GlutesAbsCardio />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default BodyPartsCarousel
