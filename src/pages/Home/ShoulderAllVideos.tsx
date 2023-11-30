import Navbar from '../../components/Navbar/Navbar'
import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'
import classes from './AllVideoPage.module.css'

const ShoulderAllVideos = () => {
  const { videoGet } = useVideoGet()

  return (
    <>
      <Navbar />
      <p className={classes.title}>All Shoulder Videos</p>
      <div className={classes.videoContainer}>
        {videoGet &&
          videoGet
            .filter((videoData) => {
              return videoData.body_part === 'shoulder'
            })
            .map((videoData) => {
              return <VideoGet key={videoData.content_id} videoGet={videoData} />
            })}
      </div>
    </>
  )
}
export default ShoulderAllVideos
