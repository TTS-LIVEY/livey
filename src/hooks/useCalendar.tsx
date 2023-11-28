import React, { createContext, useContext, useState, ReactNode } from 'react'
import dayjs, { Dayjs } from 'dayjs'

interface CalendarContextProps {
  value: Dayjs | null
  setCalendarValue: (newValue: Dayjs | null) => void
}

const CalendarContext = createContext<CalendarContextProps | undefined>(undefined)

export const CalendarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())

  const setCalendarValue = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  return <CalendarContext.Provider value={{ value, setCalendarValue }}>{children}</CalendarContext.Provider>
}

export const useCalendar = (): CalendarContextProps => {
  const context = useContext(CalendarContext)

  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider')
  }

  return context
}
