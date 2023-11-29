import axios from 'axios'
import { database } from '../../public/Database/database'
import { useState } from 'react'
import { API_HOST } from '../utils/url'

const MyAsset = () => {
  const token = localStorage.getItem('token')
  const [isLoadingButton, setIsLodingButton] = useState<boolean>(false)
  const Submit = async () => {
    setIsLodingButton(true)
    try {
      for (let i = 0; i < database.length; i++) {
        const res = await axios.post(`${API_HOST}/content/`, database[i], {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(res.data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLodingButton(false)
    }
  }
  return (
    <>
      <h1>Hello from Asset</h1>
      <p>Click button to add data in assets/database to website database</p>
      <button onClick={Submit} disabled={isLoadingButton}>
        {isLoadingButton ? 'Submiting' : 'Submit'}
      </button>
    </>
  )
}

export default MyAsset
