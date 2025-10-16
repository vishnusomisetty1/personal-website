import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between gap-2 border-b border-navy-600 bg-navy-600 px-4 py-3 text-base text-white shadow-md sm:gap-6 sm:px-6 sm:text-lg">
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
