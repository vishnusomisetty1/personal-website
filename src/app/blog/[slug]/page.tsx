import { getBlogPosts } from "@/db/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Page({ params }: { params: { slug: string } }) {
  let allBlogs = getBlogPosts();
  const blogPost = allBlogs.find((blog) => blog.slug === params.slug);

  if (blogPost) {
    return (
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article
          className="prose prose-invert max-w-none py-12
          [&>ol]:pl-8
          [&>ol]:text-left
          [&>p:not(:has(+h1)):not(:has(+h2)):not(:has(+h3))]:indent-8
          [&>p]:text-justify
          [&>ul]:pl-8
          [&>ul]:text-left"
        >
          <h1 className="mb-8">{blogPost.metadata.title}</h1>
          <MDXRemote source={blogPost.content} />
        </article>
      </div>
    );
  } else {
    return <div>Blog post not found.</div>;
  }
}
