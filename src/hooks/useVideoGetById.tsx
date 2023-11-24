import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'

const useVideoById = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoById, newVideoById] = useState<ContentDTO | null>(null)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`http://localhost:8085/content/${id}`)
        newVideoById(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  return { isLoading, videoById, isError }
}
export default useVideoById
