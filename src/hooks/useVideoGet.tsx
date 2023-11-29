import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useVideoGet = () => {
  const [videoGet, setVideoGet] = useState<ContentDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentDTO[]>(`${API_HOST}/content/`)

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
