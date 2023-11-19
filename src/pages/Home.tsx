import Navbar from '../components/Navbar'
import classes from './Home.module.css'
import { Toaster } from 'react-hot-toast'
const Home = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <h1 className={classes.title}>Welcome Starter</h1>
    </div>
  )
}

export default Home
