import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Home({latestBlog, blogsLayout}) {

  const blogImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url(${latestBlog.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    maxHeight: '100%',
    paddingTop: '30%'
  }

  return (
    <>
      <NavLink 
        to={`/post/${latestBlog.id}`}
        className=""
      >
        <section className="mb-10" style={blogImg}>
          <div className="container">
            <div className="mr-6 sm:mr-16 md:mr-40 pb-10">
              <div className="transform -translate-x-full opacity-0 text-sm md:text-base motion-safe:animate-slide-right">{latestBlog.date}</div>
              <h2 className="transform -translate-x-full opacity-0 font-bold text-3xl mb-3 animate-slide-right-delay-05">{latestBlog.title}</h2>
              <p className="transform -translate-x-full opacity-0 animate-slide-right-delay-1s">{latestBlog.content}</p>
            </div>
          </div>
        </section>
      </NavLink>

      {blogsLayout}
    </>
  )
}
