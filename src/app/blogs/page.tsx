import BlogList from "@/components/blogs/BlogList"

export default async function Blogs() {

  const rawBlogPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogPosts: ISingleBlogPost[] = await rawBlogPosts.json()

  return (
    <>
      <h1 className="text-2xl mb-12 py-4">Blogs Page</h1>
      <BlogList blogs={blogPosts} />
    </>
  )
}
