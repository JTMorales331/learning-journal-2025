import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getBlogData } from '../../services/Blogs'

// Components
import Loading from '../../Components/Loading'

export default function Detail({ blogsLayout }) {
  
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
        <>
          <div className="container">
            <div className="mx-3 md:mx-10 mt-10">
              <div className="mb-1 text-sm md:text-base">
                {blog.date}
              </div>
              <h1 className="mb-5 font-bold text-3xl">{blog.title}</h1>
              
              <div className="mt-5">
                {blog.content}
              </div>

              <div className="mt-5 flex justify-center items-center">
                <img src={blog.img} className='max-w-[70vw] rounded' alt={`image of ${blog.title}`} />
              </div>
            </div>
          </div>

          {blogsLayout}
        </>
      )}
    </section>
  )
}
