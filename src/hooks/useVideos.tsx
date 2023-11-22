import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO } from '../types/dto'
import axios from 'axios'

const usePosts = () => {
  const [posts, setPosts] = useState<ContentDTO[] | null>(null)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')

        setPosts(res.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return { posts }
}
export default usePosts
