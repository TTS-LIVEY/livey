import { useEffect, useState } from 'react'
import { HistoryCreateDTO } from '../types/dto'
import axios from 'axios'
import useHistoryGet from './useHistoryGet'

const useHistoryCreate = (id: string) => {
  const token = localStorage.getItem('token')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const { newHistory } = useHistoryGet()

  const uniqueContentId = (value: number, index: number, array: number[]) => {
    return array.indexOf(value) === index
  }
  const contentId =
    newHistory &&
    newHistory
      .map((data) => {
        return data.contentId
      })
      .reverse()
      .filter(uniqueContentId)
  console.log(!contentId?.includes(Number(id)))

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        if (!contentId?.includes(Number(id))) {
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
        }
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id, token, contentId, newHistory])

  return { isLoading, isError, contentId }
}
export default useHistoryCreate
