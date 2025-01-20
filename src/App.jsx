// react shi
import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

// Layouts
import Main from './Layouts/Main'

// components
import BlogsLayout from './Components/Blogs/index'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import PostDetail from './Pages/PostDetail'

// Services
import {
  getBlogsData
} from './services/Blogs'


function App() {
  
  const [blogs, setBlogs] = useState([])
  const [latestBlog, setLatestBlog] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogsData()
        setBlogs(data.blogs)
        
        setLatestBlog(data.blogs[0])

        if (data.blogs.length > 0) {
          console.log('Latest Blog:', data.blogs[0])
        }
      } catch (err){
        console.error('error: ', err)
        setError(prev => [...prev, 'problem in fetching blogs: ' + err])
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchBlogs()
  }, [])


  const blogsComponents = blogs.map(blog => {
    return (
      <BlogsLayout.Blog key={blog.id} blog={blog} />
    )
  })
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>

          {/* Home */}
          <Route 
            index
            element=
            {
              <Home
                latestBlog={latestBlog}
                blogsLayout={
                  <BlogsLayout
                    header="Recent Posts"
                  >
                    {blogsComponents}
                  </BlogsLayout>
                }
              />
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Post Detail */}
          <Route
            path="post/:id"
            element={
            <PostDetail
              blogsLayout={
                <BlogsLayout
                  header="Related Posts"
                  border={true}
                >
                  {blogsComponents}
                </BlogsLayout>
              }
            />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
