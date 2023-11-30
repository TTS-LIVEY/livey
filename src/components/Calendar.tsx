import { PickersDay, PickersDayProps } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { Dayjs } from 'dayjs'
import { useRef } from 'react'
import Badge from '@mui/material/Badge'

const ServerDay = (props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) => {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props

  const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0

  return (
    <Badge key={props.day.toString()} overlap="circular" badgeContent={isSelected ? '💞' : undefined}>
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  )
}
interface ICalendarProp {
  value: Dayjs | null
  setCalendarValue: (newValue: Dayjs | null) => void
  highlightedDays: number[]
}
const Calendar = ({ value, setCalendarValue, highlightedDays }: ICalendarProp) => {
  //const [value, setValue] = useState<Dayjs | null>(dayjs())

  const requestAbortController = useRef<AbortController | null>(null)
  //const [setIsLoading] = useState(false)

  const handleMonthChange = () => {
    if (requestAbortController.current) {
      requestAbortController.current.abort()
    }

    //setIsLoading(true)

    //fetchHighlightedDays(date);
  }

  const handleDayClick = (day: Dayjs) => {
    setCalendarValue(day)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        value={value}
        disableFuture
        onMonthChange={handleMonthChange}
        onChange={(newValue) => setCalendarValue(newValue)}
        slots={{
          day: (props) => <ServerDay {...props} onClick={() => handleDayClick(props.day)} />,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
      />
    </LocalizationProvider>
  )
}

export default Calendar
