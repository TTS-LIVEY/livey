import toast from 'react-hot-toast'
import { JournalCreateDTO } from '../types/dto'
import axios from 'axios'
import { useState } from 'react'
import { API_HOST } from '../utils/url'

const useJournalCreate = () => {
  const token = localStorage.getItem('token')
  const [isLoadingButton, setIsLodingButton] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const Submit = async (journal_rating: number | null, journal_note: string | null, journal_weight: number | null) => {
    setIsLodingButton(true)
    const newJournal: JournalCreateDTO = {
      journal_rating,
      journal_note,
      journal_weight,
    }
    const notifySubmit = () => {
      toast.success('Created Journal', { position: 'top-center', duration: 2000 })
    }
    setIsLoading(true)
    try {
      const res = await axios.post<JournalCreateDTO>(`${API_HOST}/journal`, newJournal, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      setTimeout(() => {
        notifySubmit()
      }, 500)
      console.log(res.data)
    } catch (err) {
      throw new Error()
    } finally {
      setIsLodingButton(false)
      setIsLoading(false)
    }
  }

  return { isLoading, isLoadingButton, Submit }
}

export default useJournalCreate
