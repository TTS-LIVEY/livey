import { Link } from 'react-router-dom'
import classes from './AllVideo.module.css'

import VideoGet from '../../components/VideoGet'
import useVideoGet from '../../hooks/useVideoGet'

function CardioVideo() {
  const { videoGet } = useVideoGet()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <p className={classes.TitleLeft}>Cardio Videos</p>

          <Link to="/cardioAll">
            <p className={classes.TitleRight}>View all videos</p>
          </Link>
        </div>

        <div className={classes.videoContainer}>
          {videoGet &&
            videoGet
              .filter((videoData) => {
                return videoData.body_part === 'cardio'
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

export default CardioVideo
