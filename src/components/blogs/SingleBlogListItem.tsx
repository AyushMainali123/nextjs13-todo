import Link from "next/link";
import { Button } from "../ui/button";

type SingleBlogListItemProps = ISingleBlogPost;


const SingleBlogListItem = ({body, title, userId,id}: SingleBlogListItemProps) => {
  return (
    <li className="mb-6">
      <p>Post by User #{userId}</p>
      <h5>{ title}</h5>
      <p className="truncate max-w-xs">{body}</p>
      <Button asChild variant={'link'} className="text-white p-0">
        <Link href={`/blogs/${id}`}>View Blog Post</Link>
      </Button>
    </li>
  )
}


export default SingleBlogListItem;
