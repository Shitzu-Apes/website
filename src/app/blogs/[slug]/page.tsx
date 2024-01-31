import { readFileSync, readdirSync } from "fs";

export default async function BlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = readFileSync(`./blogs/${slug}.md`, "utf-8");

  return (
    <div>
      <h1>Blog Page</h1>
      <h2>slug: {JSON.stringify(slug)}</h2>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = readdirSync("./blogs", { withFileTypes: true });

  return posts.map((post) => {
    console.log({ post });
    return {
      slug: post.name.slice(0, -3),
    };
  });
}
