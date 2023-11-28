import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import VideosTab from './VideosTab'
import classes from './WorkoutVideo.module.css'

function WorkoutVideo() {
  return (
    <>
      <Navbar />

      <div className={`${classes.container}`}>
        <div className={`${classes.Title}`}>Workout videos</div>

        <div className="mt-10 mb-20 ">
          <VideosTab />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WorkoutVideo
