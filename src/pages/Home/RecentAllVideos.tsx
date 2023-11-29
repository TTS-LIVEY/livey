import Navbar from '../../components/Navbar/Navbar'
import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'
import classes from './AllVideoPage.module.css'

const RecentAllVideos = () => {
  const { videoGet } = useVideoGet()

  return (
    <>
      <Navbar />
      <p className={classes.title}>All Videos</p>
      <div className={classes.videoContainer}>
        {videoGet &&
          videoGet
            .map((videoData) => {
              return <VideoGet key={videoData.content_id} videoGet={videoData} />
            })
            .reverse()}
      </div>
    </>
  )
}
export default RecentAllVideos
