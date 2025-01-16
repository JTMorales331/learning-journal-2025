// react shi
import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

// Layouts
import Main from './Layouts/Main'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import PostDetail from './Pages/PostDetail'

import {
  getBlogsData,
  getBlogData
} from './services/Blogs'


function App() {
  
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogsData()
        console.log("data:" ,data)
        setBlogs(data)
      } catch (err){
        console.error(err)
        setError('problem in fetching blogs:', err)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchBlogs()
  }, [])

  useEffect(() => {
    console.log(blogs.blogs[0])
  }, [blogs])
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>

          {/* Home */}
          <Route 
            index
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Post Detail */}
          <Route
            path="post/:id"
            element={<PostDetail />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
