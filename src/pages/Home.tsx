import Footer from '../components/Footer/Footer'
import RecentVideo from './Home/RecentVideo'
import Navbar from '../components/Navbar/Navbar'
import BannerCarousel from './Home/BannerCarousel'
import BicepVideo from './Home/BicepVideo'
import LegsVideo from './Home/LegsVideo'
import AbsVideo from './Home/AbsVideo'
import WebStatic from './Home/WebStatic'
import { Toaster } from 'react-hot-toast'
import classes from './Home.module.css'
import { useEffect, useState } from 'react'
import Brocco from '../../public/Home/parallax/Brocco.svg'
import Drug from '../../public/Home/parallax/Drug.svg'
import Dumbel2 from '../../public/Home/parallax/Dumbel2.svg'
import ProteinShake from '../../public/Home/parallax/ProteinShake.svg'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const broccoStyle = {
    marginTop: `${scrollY * 1.2}px`,
  }
  const drugStyle = {
    marginTop: `${scrollY * 0.8}px`,
  }
  const dumbel2Style = {
    marginTop: `${scrollY * 1.05}px`,
  }
  const proteinshakeStyle = {
    marginTop: `${scrollY * 0.9}px`,
  }

  const ratioScreen = 0.000265
  const currentVh = window.innerHeight
  const currentVw = window.innerWidth
  const parallax = {
    maxHeight: `${currentVw * currentVh * ratioScreen}vh`,
  }

  return (
    <div>
      <Toaster />
      <Navbar />
      <div className={classes.parallaxBox1}>
        <section className={classes.parallax} style={parallax}>
          <img src={Brocco} id="Brocco" style={broccoStyle} />
          <img src={Drug} className={classes.Drug} style={drugStyle} />
          <img src={Dumbel2} className={classes.Dumbel2} style={dumbel2Style} />
          <img src={ProteinShake} className={classes.ProteinShake} style={proteinshakeStyle} />
          <img src={Brocco} id="Brocco" style={broccoStyle} />
          <img src={Drug} className={classes.Drug} style={drugStyle} />
          <img src={Dumbel2} className={classes.Dumbel2} style={dumbel2Style} />
          <img src={ProteinShake} className={classes.ProteinShake} style={proteinshakeStyle} />
          <img src={Brocco} id="Brocco" style={broccoStyle} />
        </section>
      </div>

      <BannerCarousel />
      <WebStatic />

      <RecentVideo />
      <BicepVideo />
      <LegsVideo />
      <AbsVideo />
      <Footer />
    </div>
  )
}

export default Home
