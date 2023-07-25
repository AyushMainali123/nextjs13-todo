import SingleBlogListItem from "./SingleBlogListItem"


interface IBlogList{
  blogs: ISingleBlogPost[]
}

export default function BlogList({blogs}: IBlogList) {
  return (
    <ul>
      {blogs.map(blog => (
        <SingleBlogListItem {...blog} key={blog.id} />
      ))}
    </ul>
  )
}
