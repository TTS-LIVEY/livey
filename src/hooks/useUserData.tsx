import { useEffect, useState } from 'react'
import { userDataDTO } from '../types/dto'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useUserData = () => {
  const [newUserData, setUserData] = useState<userDataDTO | null>(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_HOST}/user/me/`, {
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
