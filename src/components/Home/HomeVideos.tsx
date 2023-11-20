import classes from './HomeVideos.module.css'
import pic from './thumb.webp'

function HomeVideos() {
  return (
    <>
      <div className={`flex flex-col ${classes.card}`}>
        <img src={pic} className={`rounded-xl `} />
        <p className={`${classes.font} mt-3 mx-5`}>Video title workout 300000000000000000</p>
      </div>
    </>
  )
}

export default HomeVideos
