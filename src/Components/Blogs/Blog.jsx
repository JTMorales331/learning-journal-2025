import { Link } from 'react-router-dom'

export default function Blog({blog}) {
  return (
    <div className="blog-card mb-3" key={blog.id}>
        <Link to={`/post/${blog.id}`} className="hover:underline">
          <img className="rounded-lg mb-3" src={blog.img} alt={`picture of ${blog.title}`} />
          <div className="text-sm sm:text-base">{blog.date}</div>
          <h3 className="font-bold text-base sm:text-lg mb-1">{blog.title}</h3>
          <p className="text-xs sm:text-sm">{blog.content}</p>
        </Link>
      </div>
  )
}
