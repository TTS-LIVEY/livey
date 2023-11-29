import { useEffect, useState } from 'react'
import { userDataDTO } from '../types/dto'
import axios from 'axios'

const useUserGet = () => {
  const [userGet, setUserGet] = useState<userDataDTO[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<userDataDTO[]>('http://localhost:8085/user/')
        setUserGet(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return { userGet }
}
export default useUserGet
