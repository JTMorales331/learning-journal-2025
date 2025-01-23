import React from 'react'

export default function Content({title, children}) {
  return (
    <div className="mb-8">
      <div className="container">
        <h4 className="font-bold mb-2">{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  )
}
