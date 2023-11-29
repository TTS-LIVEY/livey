import { useEffect, useState } from 'react'
import { JournalDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useJournalGet = () => {
  const [journalGet, setJournalGet] = useState<JournalDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<JournalDTO[]>(`${API_HOST}/journal/`)
        setJournalGet(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return { journalGet }
}
export default useJournalGet
