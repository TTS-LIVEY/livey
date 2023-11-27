import { useEffect, useState } from 'react'
import { userDataDTO } from '../types/dto'
import axios from 'axios'

const useUserData = () => {
  const [newUserData, setUserData] = useState<userDataDTO | null>(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8085/user/me/', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        setUserData(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [token])

  return { newUserData }
}
export default useUserData
