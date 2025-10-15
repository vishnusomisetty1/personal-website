export function Footer() {
  return (
    <footer className="mt-10 border-t border-navy-100 bg-white/80 px-6 py-6 text-sm text-navy-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="opacity-80">
          © {new Date().getFullYear()} Vishnu Somisetty
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="/blog">
            Blog
          </a>
          <a className="hover:underline" href="/youtube">
            YouTube
          </a>
          <a className="hover:underline" href="/comment">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
