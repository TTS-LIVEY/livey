import { useEffect, useState } from 'react'
import { JournalDTO } from '../types/dto'
import axios from 'axios'

const useJournalGet = () => {
  const [journalGet, setJournalGet] = useState<JournalDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<JournalDTO[]>('http://localhost:8085/journal/')
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
