import { Link } from 'react-router-dom'
import classes from './AllVideo.module.css'
import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'

function RecentVideo() {
  const { videoGet } = useVideoGet()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <p className={classes.TitleLeft}>Recent Workout Videos</p>

          <Link to="/recentAll">
            <p className={classes.TitleRight}>View all videos</p>
          </Link>
        </div>

        <div className={classes.videoContainer}>
          {videoGet &&
            videoGet.slice(-3).map((videoData) => {
              return <VideoGet key={videoData.content_id} videoGet={videoData} />
            })}
        </div>
      </div>
    </>
  )
}

export default RecentVideo
