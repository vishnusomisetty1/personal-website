import { getBlogPosts } from "@/db/blog";
import Link from "next/link";

export default function Page() {
  let allBlogs = getBlogPosts();

  return (
    <main className="">
      <h1 className="font-serif text-7xl">My Blog</h1>
      <div className="mx-3 mt-6 flex flex-col space-y-4 md:mx-12">
        {allBlogs.map((blog) => (
          <Link
            href={"blog/" + blog.slug}
            className="rounded-lg border-4 border-indigo-500 pl-3 pr-3 text-left font-serif text-4xl hover:underline"
          >
            <p>{blog.metadata.title}</p>
            <p className="text-2xl">{blog.metadata.publishedAt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
