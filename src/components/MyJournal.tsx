import { Rating } from '@mui/material'
import Calendar from './Calendar'
import classes from './MyJournal.module.css'
import { FormEvent, useEffect, useState } from 'react'
import useJournalCreate from '../hooks/useJournalCreate'
import useJournalGet from '../hooks/useJournalGet'
import useUserData from '../hooks/useUserData'

const MyJournal = () => {
  const [new_journal_rating, set_journal_rating] = useState<number | null>(null)
  const [new_journal_note, set_journal_note] = useState<string | null>(null)
  const [new_journal_weight, set_journal_weight] = useState<number | null>(null)
  const { isLoadingButton, Submit } = useJournalCreate()
  const { journalGet } = useJournalGet()
  const { newUserData } = useUserData()

  function onChange(newValue: number | null) {
    if (newValue !== null) set_journal_rating(newValue)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await Submit(new_journal_rating, new_journal_note, new_journal_weight)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const updateStateWithLatestData = async () => {
      try {
        if (newUserData !== null && journalGet !== null) {
          const matchJournal = journalGet
            .slice()
            .reverse()
            .find((data) => data.userId === newUserData.id)
          console.log(journalGet)
          console.log(matchJournal)
          if (matchJournal !== undefined) {
            set_journal_rating(matchJournal.journal_rating)
            set_journal_note(matchJournal.journal_note)
            set_journal_weight(matchJournal.journal_weight)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

    updateStateWithLatestData()
  }, [newUserData, journalGet])

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Calendar />
      </div>
      <form className={classes.right} onSubmit={handleSubmit}>
        <p>20 November 2023</p>
        <p>Today&apos;s Workout Rating</p>
        <div className={classes.star}>
          <Rating
            value={new_journal_rating}
            name="star"
            defaultValue={0}
            max={10}
            onChange={(_, newValue) => onChange(newValue)}
          />
        </div>
        <p>Add A Journal Entry</p>
        <textarea
          className={classes.inputText}
          placeholder="Add your workout journey"
          onChange={(e) => {
            set_journal_note(e.target.value)
          }}
          value={new_journal_note !== null ? new_journal_note : ''}
        ></textarea>
        <p>Measurements</p>
        <div className={classes.bodyWeight}>
          <p>Body Weight :</p>
          <input
            type="number"
            className={classes.inputWeight}
            placeholder="KG"
            onChange={(e) => {
              set_journal_weight(Number(e.target.value))
            }}
            value={new_journal_weight !== null ? new_journal_weight : undefined}
          ></input>
        </div>
        <button className={isLoadingButton ? classes.buttonLoading : classes.button} disabled={isLoadingButton}>
          {isLoadingButton ? 'Sending' : 'Send'}
        </button>
      </form>
    </div>
  )
}
export default MyJournal
