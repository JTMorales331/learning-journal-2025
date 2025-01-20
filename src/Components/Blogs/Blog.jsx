import { Link } from 'react-router-dom'

export default function Blog({blog}) {
  return (
    <div className="blog-card" key={blog.id}>
        <Link to={`/post/${blog.id}`}>
          <img className="rounded-lg mb-3" src={blog.img} alt={`picture of ${blog.title}`} />
          <div className="mb-1">{blog.date}</div>
          <h3 className="font-bold text-base sm:text-lg mb-3">{blog.title}</h3>
          <p className="text-xs sm:text-sm">{blog.content}</p>
        </Link>
      </div>
  )
}
