import { Link } from 'react-router-dom'
import useHistoryGet from '../hooks/useHistoryGet'
import useVideoGet from '../hooks/useVideoGet'
import classes from './MyHistory.module.css'

const MyHistory = () => {
  const { newHistory } = useHistoryGet()
  const { videoGet } = useVideoGet()

  const uniqueContentId = (value: number, index: number, array: number[]) => {
    return array.indexOf(value) === index
  }
  const contentId =
    newHistory &&
    newHistory
      .map((data) => {
        return data.contentId
      })
      .reverse()
      .filter(uniqueContentId)

  console.log(contentId)

  const HistoryVideo =
    videoGet !== null && contentId !== null
      ? videoGet
          .filter((data) => {
            return contentId.includes(data.content_id)
          })
          .sort((a, b) => {
            return contentId.indexOf(a.content_id) - contentId.indexOf(b.content_id)
          })
      : null

  const shortTitle = (longTitle: string, maxLength: number) => {
    const shortString = longTitle.substring(0, maxLength)
    return shortString.substring(0, Math.min(shortString.length, shortString.lastIndexOf(' ')))
  } //For short video title name
  const title_length = 20

  return (
    <>
      <div className={classes.container}>
        {HistoryVideo &&
          HistoryVideo.map((video) => {
            return (
              <div key={video.content_id}>
                <Link className={`${classes.card} bg-white rounded-2xl shadow-md`} to={`/content/${video.content_id}`}>
                  <img className={`${classes.image} rounded-t-2xl`} src={video.thumbnail_url} />
                  <p className={`${classes.title} mb-3 ml-4`}>{shortTitle(video.video_title, title_length)}</p>
                </Link>
              </div>
            )
          })}
      </div>
    </>
  )
}
export default MyHistory
