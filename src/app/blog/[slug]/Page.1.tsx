export default function Page({ params }: { params: { slug: string } }) {
  console.log("");
  return <div>{params.slug}</div>;
}
