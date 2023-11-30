import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useProgramsGet = () => {
  const [programsGet, setProgramsGet] = useState<ContentDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentDTO[]>(`${API_HOST}/content/`)

        setProgramsGet(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return { programsGet }
}
export default useProgramsGet
