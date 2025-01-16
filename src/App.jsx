// react shi
import {Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

// Layouts
import Main from './Layouts/Main'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import PostDetail from './Pages/PostDetail'


function App() {

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
