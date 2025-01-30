import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

// Components
import Loading from '../../Components/Loading'

// Models
import { DEFAULT_POST } from '../../models'

// Modals
import ConfirmModal from '../../modals/ConfirmModal'
import MessageModal from '../../modals/MessageModal'

export default function Form() {

  const { state } = useLocation()
  const navigate = useNavigate()

  const { fromSpecificPage } = state || {}
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])
  const [post, setPost] = useState({...DEFAULT_POST})
  const [confirmModalAction, setConfirmModalAction] = useState(null)
  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSave = () => {
    setLoading(true)
    try {
      console.log('submitted!')
      setConfirmationModalOpen(false)
      setMessageModalOpen(true)

      setTimeout(() => {
        setMessageModalOpen(false)
        setLoading(false)
        window.location.reload(true)
      }, [2500])

    } catch (payload) {
      console.log('Error', payload.response)
      setError(payload.response.data)
    } finally {
      setLoading(false)
    }
  }

  const handleConfirmAction = () => {
    if (confirmModalAction === 'submit') {
      console.log('submitting')
      handleSave()
    } else if (confirmModalAction === 'back') {
      if (fromSpecificPage) {
        navigate('/', { replace: true });
      } else {
        navigate(-1);
      }
    }
  }

  // to open confirmation modal
  const openConfirmModal = (action) => {
    console.log('modal opening')
    setConfirmModalAction(action)
    setConfirmationModalOpen(true)
  }

  return (
    <>
      <section className="">
        {loading ? (
          <Loading />
        ) : (
          <div className="container mt-10">
            <h1 className="text-3xl font-bold"><span className='text-blue-400'>Create</span> a Post</h1>
            
            <div className="mt-10">

              {/* Post Title */}
              <div className="form-group flex flex-col sm:flex-row sm:items-center sm:gap-5">
                <label className="text-lg font-bold">
                  Post Title
                </label>
                <input
                  value={post.title}
                  type="text"
                  placeholder='Title'
                  name="title"
                  className="input-default px-3 py-2 mt-3 sm:mt-0 w-full sm:w-[65vw]"
                  disabled={loading}
                  onChange={handleChange}
                />
              </div>

              {/* Post Content */}
              <div className="form-group flex flex-col mt-10">
                <label className="text-lg font-bold">
                  Post Content
                </label>
                <textarea
                  value={post.content}
                  placeholder='Content here'
                  name="content"
                  className="input-default px-3 py-2 mt-3 resize-none"
                  rows={8}
                  disabled={loading}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row items-center justify-center md:justify-normal gap-3 mt-5">
                <button
                  className="btn bg-blue-400 text-gray-900 hover:bg-blue-800 hover:text-white rounded"
                  onClick={() => openConfirmModal('submit')}
                >
                  Submit
                </button>
                <button
                  className="btn btn-error rounded"
                  onClick={() => openConfirmModal('back')}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <ConfirmModal
        isOpen={confirmationModalOpen}
        title={{
          submit: 'Submit Post',
          back: 'Go Back'
        }[confirmModalAction]}
        style={{
          submit: 'btn-success',
          back: 'btn-warning'
        }[confirmModalAction]}
        onCancel={() => setConfirmationModalOpen(false)}
        onConfirm={handleConfirmAction}
      >
        Are you sure you want to {confirmModalAction} this user?
      </ConfirmModal>

      <MessageModal
        isShowing={messageModalOpen}
      >
        Post Created!
      </MessageModal>
    </>

  )
}
