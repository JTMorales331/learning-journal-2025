import React from 'react'

export default function BlogsLayout({children, header, border}) {
  return (
    <section className="mt-10">
      <div className="container">
        {border && <div className="border border-[#f8f8f8] mb-5"></div>}
        <h4 className="text-center text-lg font-bold">{header}</h4>
        <div className="blog-grid mt-3">
          {children}
        </div>
      </div>
    </section>
  )
}
