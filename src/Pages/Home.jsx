import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import Loading from '../Components/Loading'

export default function Home({latestBlog, blogsLayout, isGettingBlogs}) {

  const blogImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url(${latestBlog.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    maxHeight: '100%',
    paddingTop: '30%',

  }

  return (
    <>
      {!isGettingBlogs ? (
        <>
          <NavLink 
            to={`/post/${latestBlog.id}`}
            className=""
          >
            <div className="overflow-hidden group">
              <section className="mb-10" style={blogImg}>
                <div className="container">
                  <div className="mr-6 sm:mr-16 md:mr-32 pb-10 group-hover:scale-105 group-hover:ml-6 duration-500 ease-in-out">
                    <div className="transform -translate-x-full opacity-0 text-sm md:text-base motion-safe:animate-slide-right">{latestBlog.date}</div>
                    <h2 className="transform -translate-x-full opacity-0 font-bold text-3xl mb-3 animate-slide-right-delay-05">{latestBlog.title}</h2>
                    <p className="transform -translate-x-full opacity-0 animate-slide-right-delay-1s">{latestBlog.content}</p>
                  </div>
                </div>
              </section>
            </div>
          </NavLink>
    
          {blogsLayout}
        </>

      ) : (
        <Loading />
      )}
    </>
  )
}
