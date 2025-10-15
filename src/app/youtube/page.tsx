export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-semibold tracking-tight">YouTube</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {["AIx5nDbBGlo", "az-mWyWfMJg"].map((id) => (
          <div
            key={id}
            className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm"
          >
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
