interface SlugLayoutProps {
  children: React.ReactNode;
}

interface GenerateMetadataProps {
  params: {slug: string}
}
export const generateMetadata = async ({ params: {slug} }: GenerateMetadataProps) => {
  
  const blogPostRaw = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const blogPost: ISingleBlogPost = await blogPostRaw.json();
  return {
    title: blogPost.title,
    description: blogPost.body,
  }
}

export default function SlugLayout({children}: SlugLayoutProps) {
  return (
    <div>
     <h1 className="py-4 mb-8 text-2xl">SINGLE BLOG PAGE</h1>
      <div>
        {children}
      </div>
    </div>
  )
}