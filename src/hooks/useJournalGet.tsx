import { useEffect, useState } from 'react'
import { JournalDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useJournalGet = () => {
  const [journalGet, setJournalGet] = useState<JournalDTO[] | null>(null)

  const fetchData = async () => {
    try {
      const res = await axios.get<JournalDTO[]>(`${API_HOST}/journal/`)
      setJournalGet(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { journalGet, fetchData }
}

export default useJournalGet
