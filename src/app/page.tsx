import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-left">
      <section className="rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 p-10 text-white shadow-lg">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Vishnu Somisetty
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          I love solving Rubik&apos;s cubes, playing basketball, creating art,
          traveling, photography, content creation, and learning useful skills
          that benefit my future.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="rounded-md bg-white px-5 py-2 text-navy-700 shadow-sm transition hover:bg-white/90"
          >
            Read the Blog
          </Link>
          <a
            href="https://rvrmedia.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/60 px-5 py-2 text-white transition hover:bg-white/10"
          >
            Photography Business
          </a>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 p-10 text-white shadow-lg">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Photography Business: RVR Media
        </h2>
        <p className="mt-3 max-w-2xl text-white/90">
          Professional photography and video production for your special
          moments.
        </p>
        <div className="mt-6">
          <a
            href="https://rvrmedia.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-white px-5 py-2 text-navy-700 shadow-sm transition hover:bg-white/90"
          >
            Visit RVR Media
          </a>
        </div>
      </section>
    </main>
  );
}
