import { useState } from 'react'
import { CreateContentDTO } from '../types/dto'
import toast from 'react-hot-toast'
import axios from 'axios'
import { API_HOST } from '../utils/url'

const useVideoCreate = () => {
  const token = localStorage.getItem('token')
  const [isLoadingButton, setIsLodingButton] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const Create = async (
    video_url: string | null,
    video_type: string | null,
    body_part: string | null,
    program_title: string | null,
    schedule_title: string | null,
  ) => {
    setIsLodingButton(true)
    const newContent: CreateContentDTO = {
      video_url,
      video_type,
      body_part,
      program_title,
      schedule_title,
    }
    const notifySuccess = () => {
      toast.success(`Created Content Successfully`, { position: 'top-center', duration: 2000 })
    }
    setIsLoading(true)
    try {
      const res = await axios.post<CreateContentDTO>(`${API_HOST}/content`, newContent, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setTimeout(() => {
        notifySuccess()
      }, 500)
      console.log(res.data)
    } catch (err) {
      throw new Error()
    } finally {
      setIsLodingButton(false)
      setIsLoading(false)
    }
  }
  return { isLoading, isLoadingButton, Create }
}

export default useVideoCreate
