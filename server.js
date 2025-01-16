import { createServer, Model } from 'miragejs'

createServer({
  models: {
    blog: Model,
  },

  seeds(server) {
    
    // blogs
    const blogData = [
      {
        id: "1",
        img: "../public/images/placeholder.png",
        date: "Jan 01, 2022",
        title: "The Future of Technology",
        content: "Technology is evolving at an unprecedented pace, changing the way we live and work. In this blog, we explore the future trends and innovations that are shaping the world of tomorrow."
      },
      {
        id: "2",
        img: "../public/images/placeholder.png",
        date: "Feb 15, 2022",
        title: "Understanding Artificial Intelligence",
        content: "Artificial Intelligence (AI) is one of the most revolutionary technologies of our time. This post explains the basics of AI, its applications, and how it's transforming industries worldwide."
    },
    {
        id: "3",
        img: "../public/images/placeholder.png",
        date: "Mar 10, 2022",
        title: "A Beginner's Guide to Web Development",
        content: "Web development is an essential skill in the modern world. This article provides beginners with an introduction to front-end and back-end technologies, and tips on how to get started in web development."
    },
    {
        id: "4",
        img: "../public/images/placeholder.png",
        date: "Apr 20, 2022",
        title: "The Rise of Remote Work",
        content: "Remote work is no longer a trend; it is now a permanent fixture in many industries. We dive into the advantages and challenges of remote work, and how companies can adapt to this new way of working."
    },
    {
        id: "5",
        img:
         "../public/images/placeholder.png",
        date: "May 05, 2022",
        title: "Top Programming Languages in 2022",
        content: "With so many programming languages to choose from, it can be overwhelming for new developers. In this blog, we discuss the top programming languages in 2022, their uses, and why you should learn them."
      }
    ]

    // so that we won't have to type 'server.create()' for each one, just do foreach
    blogData.forEach((post) => server.create('blog', post))
  },

  routes() {
    this.namespace = 'api'
    this.logging = false

    //Get all blog posts
    this.get('/blogs', (schema) => {
      return schema.blogs.all()
    })

    // get specific blog post
    this.get('/blogs/:id', (schema, request) => {
      const id = request.params.id
      return schema.blogs.find(id)
    })
  }
})