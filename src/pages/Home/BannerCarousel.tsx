/* eslint-disable react/no-deprecated */

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import b1 from '../../../public/Home/banner/b1.png'
import b2 from '../../../public/Home/banner/b2.png'
import b3 from '../../../public/Home/banner/b3.png'

function BannerCarousel() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={b1} />
        </div>
        <div>
          <img src={b2} />
        </div>
        <div>
          <img src={b3} />
        </div>
      </Carousel>
    </div>
  )
}

export default BannerCarousel
