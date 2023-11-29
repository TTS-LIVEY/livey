import Navbar from '../../components/Navbar/Navbar'
import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'
import classes from './AllVideoPage.module.css'

const BicepAllVideos = () => {
  const { videoGet } = useVideoGet()

  return (
    <>
      <Navbar />
      <p className={classes.title}>All Bicep Videos</p>
      <div className={classes.videoContainer}>
        {videoGet &&
          videoGet
            .filter((videoData) => {
              return videoData.body_part === 'bicep'
            })
            .map((videoData) => {
              return <VideoGet key={videoData.content_id} videoGet={videoData} />
            })}
      </div>
    </>
  )
}
export default BicepAllVideos
