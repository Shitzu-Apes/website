import { readdirSync } from "fs";

export default async function BlogsPage() {
  const posts = readdirSync("./blogs", { withFileTypes: true });
  console.log({ posts });

  return (
    <div>
      <h1>Blog</h1>
      {JSON.stringify(posts)}
    </div>
  );
}
