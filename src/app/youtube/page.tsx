export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="font-serif text-7xl">Youtube</h1> {/* Title */}
      <div className="flex w-fit flex-col items-center space-y-4 rounded-lg border-4 border-indigo-500 ">
        {" "}
        {/* Centered container for videos */}
        <iframe
          className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AIx5nDbBGlo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/az-mWyWfMJg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* You can add more iframe tags with different VIDEO_IDs */}
      </div>
    </main>
  );
}
