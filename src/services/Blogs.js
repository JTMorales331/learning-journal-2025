import axios from 'axios'
import '../../server.js'

// get blog posts
export async function getBlogsData() {
  const res = await axios.get('/api/blogs')
  return res.data
}

// get specific blog post
export async function getBlogData(id) {
  const res = await axios.get(`/api/blogs/${id}`)
  return res.data
}