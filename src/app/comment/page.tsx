import prisma from "@/app/lib/prisma";
import AddComment from "@/components/AddComment";
import Comment from "@/components/Comment";

async function getComments(minLikes = 0) {
  const comments = await prisma.comment.findMany({
    where: {
      likes: {
        gte: minLikes,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return comments;
}

export default async function Page() {
  const comments = await getComments();
  console.log("comments", comments);

  return (
    <main className="flex w-full flex-col items-center ">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="pb-8 font-serif text-7xl">Write a Comment</h1>
        <AddComment />
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            name={comment.name}
            content={comment.content}
            likes={comment.likes}
          />
        ))}
      </div>
    </main>
  );
}
