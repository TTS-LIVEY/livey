/* eslint-disable react/no-deprecated */

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import b1 from '../banner2/b1.png'
import b2 from '../banner2/b2.png'
import b3 from '../banner2/b3.png'

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
