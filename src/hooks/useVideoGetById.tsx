import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useVideoById = (id: string) => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoById, newVideoById] = useState<ContentDTO | null>(null)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`${API_HOST}/content/${id}`)

        newVideoById(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id, token])

  return { isLoading, videoById, isError }
}
export default useVideoById
