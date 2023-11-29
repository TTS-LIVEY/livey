import classes from './WebStatic.module.css'
import CountUp from 'react-countup'
import useVideoGet from '../../hooks/useVideoGet'

function WebStatic() {
  const { videoGet } = useVideoGet()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
          <p className={classes.staticNumber}>
            <CountUp end={40} duration={3} />H
          </p>
          <p className={classes.staticTitle}>
            Total<p>Watched</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>
            <CountUp end={Number(videoGet && videoGet.length)} duration={3} />
          </p>
          <p className={classes.staticTitle}>
            Total<p>Videos</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>
            {' '}
            <CountUp end={3} duration={3} />
          </p>
          <p className={classes.staticTitle}>
            Total<p>Program</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>
            {' '}
            <CountUp end={8} duration={3} />
          </p>
          <p className={classes.staticTitle}>
            Total<p>User</p>
          </p>
        </div>
      </div>
    </>
  )
}

export default WebStatic
