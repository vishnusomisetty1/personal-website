import { getBlogPosts } from "@/db/blog";

export default function Page({ params }: { params: { slug: string } }) {
  console.log("");
  let allBlogs = getBlogPosts();
  const blogPost = allBlogs.find((blog) => blog.slug === params.slug);

  // Check if a blog post was found, and return the content if so
  if (blogPost) {
    return (
      <div>
        <h1>{blogPost.metadata.title}</h1>
        <p>{blogPost.content}</p>
      </div>
    );
  } else {
    // If no blog post was found, display a message
    return <div>Blog post not found.</div>;
  }
}
