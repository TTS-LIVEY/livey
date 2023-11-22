import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import VideosTab from './VideosTab'
import classes from './WorkoutVideo.module.css'

function WorkoutVideo() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mx-56 my-10">
        <div className={`${classes.fontLg}`}>Workout videos</div>

        <div className="mt-10 mb-20 ">
          <VideosTab />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WorkoutVideo
