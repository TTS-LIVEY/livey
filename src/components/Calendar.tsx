import { PickersDay, PickersDayProps } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useRef, useState } from 'react'
import Badge from '@mui/material/Badge'

const ServerDay = (props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) => {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props

  const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0

  return (
    <Badge key={props.day.toString()} overlap="circular" badgeContent={isSelected ? '🌚' : undefined}>
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  )
}

const Calendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const [highlightedDays, setHighlightedDays] = useState([5, 2, 15])
  const requestAbortController = useRef<AbortController | null>(null)
  //const [setIsLoading] = useState(false)

  const handleMonthChange = () => {
    if (requestAbortController.current) {
      requestAbortController.current.abort()
    }

    //setIsLoading(true)
    setHighlightedDays([])
    //fetchHighlightedDays(date);
  }

  console.log(value?.format('D'))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        value={value}
        disableFuture
        onMonthChange={handleMonthChange}
        onChange={(newValue) => setValue(newValue)}
        slots={{
          day: ServerDay,
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
