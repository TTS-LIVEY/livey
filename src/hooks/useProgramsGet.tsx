import { useEffect, useState } from 'react'
import { ContentDTO } from '../types/dto'
import axios from 'axios'

const useProgramsGet = () => {
  const [programsGet, setProgramsGet] = useState<ContentDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentDTO[]>('http://localhost:8085/content/')

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
