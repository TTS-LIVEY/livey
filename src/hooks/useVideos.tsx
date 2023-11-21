import { useEffect, useState } from 'react'
import { VideoDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<VideoDTO[] | null>(null)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentsDTO>('http://localhost:8080/content')

        setPosts(res.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])
}
export default usePosts
