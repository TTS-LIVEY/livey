import Footer from '../components/Footer/Footer'
import RecentVideo from './Home/RecentVideo'
import Navbar from '../components/Navbar/Navbar'
import BannerCarousel from './Home/BannerCarousel'
import ArmVideo from './Home/ArmVideo'
import LegVideo from './Home/LegVideo'
import AbsVideo from './Home/AbsVideo'
import WebStatic from './Home/WebStatic'

const Home = () => {
  return (
    <>
      <Navbar />

      <BannerCarousel />
      <WebStatic />
      <RecentVideo />
      <ArmVideo />
      <LegVideo />
      <AbsVideo />

      <Footer />
    </>
  )
}

export default Home
