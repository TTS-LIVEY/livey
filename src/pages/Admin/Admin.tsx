import axios from 'axios'
import { useState } from 'react'
import { database } from '../../../public/Database/database'
import classes from './Admin.module.css'

const Admin = () => {
  const token = localStorage.getItem('token')
  const [isLoadingButton, setIsLodingButton] = useState<boolean>(false)
  const Submit = async () => {
    setIsLodingButton(true)
    try {
      for (let i = 0; i < database.length; i++) {
        const res = await axios.post('http://localhost:8085/content/', database[i], {
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
    <div>
      <p>Welcome to Admin page</p>
      <p>Click button to add data in assets/database to website database</p>
      <button className={classes.button} onClick={Submit} disabled={isLoadingButton}>
        {isLoadingButton ? 'Submiting' : 'Submit'}
      </button>
    </div>
  )
}

export default Admin
