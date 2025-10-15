import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between gap-6 border-b border-navy-600 bg-navy-600 px-6 py-3 text-lg text-white shadow-md">
      <Link href="/" className="hover:underline active:text-white/80">
        Home
      </Link>
      <Link href="/blog" className="hover:underline active:text-white/80">
        Blog
      </Link>
      <Link href="/youtube" className="hover:underline active:text-white/80">
        Youtube
      </Link>
      <Link href="/habits" className="hover:underline active:text-white/80">
        Habit Tracker
      </Link>
      <Link href="/comment" className="hover:underline active:text-white/80">
        Comment Page
      </Link>
    </div>
  );
}
