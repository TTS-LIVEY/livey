import { Link } from 'react-router-dom'
import classes from './AllVideo.module.css'

import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'

function ArmVideo() {
  const { videoGet } = useVideoGet()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <p className={classes.TitleLeft}>Arm Videos</p>

          <Link to="/videos">
            <p className={classes.TitleRight}>View all videos</p>
          </Link>
        </div>

        <div className={classes.videoContainer}>
          {videoGet &&
            videoGet
              .filter((videoData) => {
                return videoData.body_part === 'arm'
              })
              .slice(-3)
              .map((videoData) => {
                return <VideoGet key={videoData.content_id} videoGet={videoData} />
              })}
        </div>
      </div>
    </>
  )
}

export default ArmVideo
