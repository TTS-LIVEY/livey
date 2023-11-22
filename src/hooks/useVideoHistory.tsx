import { useEffect, useState } from 'react'
import { videoHistoryDTO } from '../types/dto'
import axios from 'axios'

const useVideoGet = () => {
  const [newVideoHistory, setNewVideoHistory] = useState<videoHistoryDTO[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get('http://localhost:8085/content')
        //logic to filter is_Watched === true
        setNewVideoHistory(res.data)
      } catch (err) {
        console.log('error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { newVideoHistory, isLoading }
}

export default useVideoGet
