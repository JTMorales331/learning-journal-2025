import React from 'react'

export default function Layout({blogsComponents}) {
  return (
    <section className="recent-posts">
      <div className="container">
        <h4 className="text-center">Recent Posts</h4>
        <div className="posts">
          {blogsComponents}
        </div>
      </div>
    </section>
  )
}
