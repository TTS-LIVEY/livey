import { useEffect, useState } from 'react'
import { HistoryDTO } from '../types/dto'
import axios from 'axios'
import useUserData from './useUserData'

const useHistoryGet = () => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [newHistory, setHistory] = useState<HistoryDTO[] | null>(null)
  const [isError, setIsError] = useState<boolean>(false)
  const { newUserData } = useUserData()

  useEffect(() => {
    const fetchData = async () => {
      //if (newUserData === null) return
      setIsLoading(true)
      try {
        const res = await axios.get(`http://localhost:8085/history/me`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        setHistory(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [token, newUserData?.id, newUserData])

  return { isLoading, newHistory, isError }
}
export default useHistoryGet
