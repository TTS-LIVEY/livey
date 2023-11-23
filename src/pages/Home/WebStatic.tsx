import classes from './WebStatic.module.css'

import useVideoGet from '../../hooks/useVideoGet'

function WebStatic() {
  const { videoGet } = useVideoGet()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
          <p className={classes.staticNumber}>40H</p>
          <p className={classes.staticTitle}>
            Total<p>Watched</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>{videoGet && videoGet.length}</p>
          <p className={classes.staticTitle}>
            Total<p>Videos</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>3</p>
          <p className={classes.staticTitle}>
            Total<p>Program</p>
          </p>
        </div>

        <div className={classes.card}>
          <p className={classes.staticNumber}>8</p>
          <p className={classes.staticTitle}>
            Total<p>User</p>
          </p>
        </div>
      </div>
    </>
  )
}

export default WebStatic
