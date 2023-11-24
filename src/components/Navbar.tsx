import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-row justify-around border-b-4 border-indigo-500 p-2 font-serif text-xl">
      <Link href="/" className="hover:underline active:text-neutral-500">
        Home
      </Link>
      <Link href="/blog" className="hover:underline active:text-neutral-500">
        Blog
      </Link>
      <Link href="/youtube" className="hover:underline active:text-neutral-500">
        Youtube
      </Link>
    </div>
  );
}
