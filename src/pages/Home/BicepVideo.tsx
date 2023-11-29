import { Link } from 'react-router-dom'
import classes from './AllVideo.module.css'

import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'

function BicepVideo() {
  const { videoGet } = useVideoGet()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <p className={classes.TitleLeft}>Bicep Videos</p>

          <Link to="/bicepAll">
            <p className={classes.TitleRight}>View all videos</p>
          </Link>
        </div>

        <div className={classes.videoContainer}>
          {videoGet &&
            videoGet
              .filter((videoData) => {
                return videoData.body_part === 'bicep'
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

export default BicepVideo
