import Navbar from '../../components/Navbar/Navbar'
// import VideosTab from './VideosTab'
import classes from './WorkoutVideo.module.css'

function WorkoutVideo() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mx-56 my-10">
        <div className={`${classes.fontLg}`}>Workout Video</div>

        <div className="mt-10"></div>
      </div>
    </>
  )
}

export default WorkoutVideo
