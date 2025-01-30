import React from "react";
import ReactDOM from 'react-dom'
import { FaCheckCircle } from "react-icons/fa"

export default function MessageModal({children, isShowing}) {
  if(!isShowing) return null
  
  return ReactDOM.createPortal (
    <div className="modal-overlay">
      <div className="modal-message-content">
        <FaCheckCircle
          style={{fontSize: '2.5rem'}}
          className="mt-2 text-blue-400"
        />
        <p className="text-lg lg:text-2xl font-bold mt-3 mb-1">{children}</p>
      </div>
    </div>,
    document.getElementById('modal')
  )
}