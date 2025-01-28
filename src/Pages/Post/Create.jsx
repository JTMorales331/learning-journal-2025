import { useState, useEffect } from 'react'

// Components
import Loading from '../../Components/Loading'

export default function Create() {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])
  
  return (
    <section className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mt-10">
          <h1 className="text-3xl font-bold"><span className='text-blue-400'>Create</span> a Post</h1>
          
          <form className="mt-10">
            <div className="form-group flex flex-col">
              <label className="text-lg font-bold">
                Post Title
              </label>
              <input
                type="text"
                placeholder='Title'
                className="input input-bordered mt-3"
              />
            </div>
          </form>
        </div>
      )}
    </section>
  )
}
