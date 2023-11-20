import Exercises from '../components/Exercise/Exercises'
import Footer from '../components/Footer/Footer'
import HomePrograms from '../components/Home/HomePrograms'
import Navbar from '../components/Navbar/Navbar'
import BannerCarousel from '../assets/pageComponent/BannerCarousel'

const Home = () => {
  return (
    <>
      <Navbar />

      {/* banner new */}
      <BannerCarousel />
      {/* banner new */}
      <div>
        <HomePrograms />
      </div>

      <div className="my-20">
        <Exercises />
      </div>
      <Footer />
    </>
  )
}

export default Home
