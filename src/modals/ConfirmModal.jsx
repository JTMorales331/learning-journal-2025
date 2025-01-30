import React from 'react'
import ReactDOM from 'react-dom'

export default function ConfirmModal({
  isOpen,
  title,
  style,
  onCancel,
  onConfirm,
  children
}) {
  
  // doesn't open the modal if its closed
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl mb-1 font-extrabold">{title}</h2>
        <p>{children}</p>
        <div className="modal-buttons">
          <button
            onClick={onConfirm}
            className={`btn ${style} rounded`}
          >
            Confirm
          </button>

          <button
            onClick={onCancel}
            className="btn btn-error rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}