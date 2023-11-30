import classes from './WebStatic.module.css'
import CountUp from 'react-countup'
import useVideoGet from '../../hooks/useVideoGet'
import useUserGet from '../../hooks/useUserGet'

function WebStatic() {
  const { videoGet } = useVideoGet()
  const { userGet } = useUserGet()

  return (
    <>
      <div className={classes.container}>
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
            <CountUp end={7} duration={3} />
          </p>
          <p className={classes.staticTitle}>
            Total<p>Program</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>
            {' '}
            <CountUp end={Number(userGet && userGet.length)} duration={3} />
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
