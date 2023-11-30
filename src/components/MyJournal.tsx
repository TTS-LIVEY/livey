import Calendar from './Calendar'
import classes from './MyJournal.module.css'
import { FormEvent, useEffect, useState } from 'react'
import useJournalCreate from '../hooks/useJournalCreate'
import useJournalGet from '../hooks/useJournalGet'
import useUserData from '../hooks/useUserData'
import dayjs, { Dayjs } from 'dayjs'
import Rating, { IconContainerProps } from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { styled } from '@mui/material'

const MyJournal = () => {
  const [new_journal_rating, set_journal_rating] = useState<number | null>(null)
  const [new_journal_note, set_journal_note] = useState<string | null>(null)
  const [new_journal_weight, set_journal_weight] = useState<number | null>(null)
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const [highlightedDays, sethighlightedDays] = useState<number[]>([])

  const setCalendarValue = (newValue: Dayjs | null) => {
    setValue(newValue)
  }
  const { isLoadingButton, Submit } = useJournalCreate()
  const { journalGet } = useJournalGet()
  const { newUserData } = useUserData()
  const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }))

  const customIcons: {
    [index: string]: {
      icon: React.ReactElement
      label: string
    }
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  }

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props
    return <span {...other}>{customIcons[value].icon}</span>
  }
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
    console.log(value?.format('DD-MM'))

    const updateStateWithLatestData = async () => {
      try {
        if (newUserData !== null && journalGet !== null && value !== null) {
          const matchJournal = journalGet
            .slice()
            .reverse()
            .filter((data) => data.userId === newUserData.id)

          const matchDate = matchJournal.filter((data) => {
            return dayjs(data.date_add).format('DD-MM') === value.format('DD-MM')
          })
          const hasday = [...new Set(matchJournal.map((v) => +dayjs(v.date_add).format('DD')))]

          sethighlightedDays(hasday)
          const journalData = matchDate[0]

          set_journal_rating(journalData?.journal_rating ?? null)
          set_journal_note(journalData?.journal_note ?? null)
          set_journal_weight(journalData?.journal_weight ?? null)
        }
      } catch (err) {
        console.log(err)
      }
    }

    updateStateWithLatestData()
  }, [newUserData, journalGet, value])

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Calendar value={value} setCalendarValue={setCalendarValue} highlightedDays={highlightedDays} />
      </div>
      <form className={classes.right} onSubmit={handleSubmit}>
        <h3 className=" text-2xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-green-700   to-cyan-600">
          Be healthy by recording everyday routine!
        </h3>

        <p className="font-semibold text-lg ">Today&apos;s Workout Rating</p>
        <div className={classes.star}>
          {/* <Rating
            value={new_journal_rating}
            name="star"
            defaultValue={0}
            max={10}
            sx={{
              fontSize: '3rem',
              '& .MuiRating-iconFilled': {
                color: '#FFCC70',
              },

              '& .MuiRating-iconHover': {
                color: '#FFCF96',
              },
            }}
            onChange={(_, newValue) => onChange(newValue)}
          /> */}
          <StyledRating
            name="highlight-selected-only"
            value={new_journal_rating}
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            onChange={(_, newValue) => onChange(newValue)}
            highlightSelectedOnly
          />
        </div>
        <p className="font-semibold text-lg">Add A Journal Entry</p>
        <textarea
          className={classes.inputText}
          placeholder="Add your workout journey"
          onChange={(e) => {
            set_journal_note(e.target.value)
          }}
          value={new_journal_note !== null ? new_journal_note : ''}
        ></textarea>
        <p className="text-base font-medium">Measurements</p>
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
