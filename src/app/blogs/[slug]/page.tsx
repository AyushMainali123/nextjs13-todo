
interface ISingleBlogPageProps {
  params: {slug: string}
}


export async function generateStaticParams() {
  const rawBlogPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogPosts: ISingleBlogPost[] = await rawBlogPosts.json();

  return blogPosts.map((blogPost) => ({
    slug: blogPost.id.toString()
  }))  
}

export default async function SingleBlogPage({ params }: ISingleBlogPageProps) {

  const blogPostRaw = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const blogPost: ISingleBlogPost = await blogPostRaw.json();
  return (
    <div>
      <h1 className="text-2xl mb-8">{blogPost.title}</h1>
      <p className="mb-4">{blogPost.body}</p>
      <p className="italic">UserID: #{blogPost.userId}</p>
    </div>
  )
}
