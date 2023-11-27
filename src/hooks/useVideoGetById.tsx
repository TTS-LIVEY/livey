import { useEffect, useState } from 'react'
import { ContentDTO, HistoryCreateDTO } from '../types/dto'
import axios from 'axios'

const useVideoById = (id: string) => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoById, newVideoById] = useState<ContentDTO | null>(null)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`http://localhost:8085/content/${id}`)

        await axios.post<HistoryCreateDTO>(
          'http://localhost:8085/history',
          { contentId: Number(id) },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        )
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