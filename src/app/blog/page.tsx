import { getBlogPosts } from "@/db/blog";
import Link from "next/link";

export default function Page() {
  let allBlogs = getBlogPosts();
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="text-4xl font-semibold tracking-tight">My Blog</h1>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {allBlogs.map((blog, index) => (
          <Link
            href={"blog/" + blog.slug}
            className="group rounded-xl border border-navy-100 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
            key={index}
          >
            <p className="text-xl font-medium text-navy-900 group-hover:underline">
              {blog.metadata.title}
            </p>
            <p className="mt-1 text-sm text-navy-900/70">
              {blog.metadata.publishedAt}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
