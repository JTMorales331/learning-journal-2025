import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getBlogData } from '.././services/Blogs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import Loading from '../Components/Loading'

export default function PostDetail() {
  
  // to get :id of params from URL
  const params = useParams()
  
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogData(params.id)
        console.log('Blog:', data.blog)
        setBlog(data.blog)
      } catch (err) {
        console.error('error: ', err)
        setError(prev => [...prev, 'problem in fetching blog: ' + err])
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [params])

  return (
    <section className="min-h-[100%] mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          
        </div>
      )}
    </section>
  )
}
