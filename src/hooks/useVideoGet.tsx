import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'

const useVideoGet = () => {
  const [videoGet, setVideoGet] = useState<ContentDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentDTO[]>('http://localhost:8085/content/')

        setVideoGet(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return { videoGet }
}
export default useVideoGet
