import { Rating } from '@mui/material'
import DateCalendarServerRequest from './Calendar'
import classes from './MyJournal.module.css'
import { useState } from 'react'

const MyJournal = () => {
  const [rating, setRating] = useState(0)

  function onChange(newValue: number | null) {
    if (newValue !== null) setRating(newValue)

    console.log(newValue)
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <DateCalendarServerRequest />
      </div>
      <div className={classes.right}>
        <p>20 November 2023</p>
        <p>Today&apos;s Workout Rating</p>
        <div className={classes.star}>
          <Rating value={rating} name="star" defaultValue={0} max={10} onChange={(_, newValue) => onChange(newValue)} />
        </div>
        <p>Add A Journal Entry</p>
        <textarea className={classes.inputText} placeholder="Add your workout journey"></textarea>
        <p>Measurements</p>
        <div className={classes.bodyWeight}>
          <p>Body Weight :</p>
          <input type="number" className={classes.inputWeight} placeholder="KG"></input>
        </div>
        <button className={classes.button}>Send</button>
      </div>
    </div>
  )
}
export default MyJournal
