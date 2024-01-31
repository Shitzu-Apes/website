import { readdirSync } from "fs";

type TPost = {
  slug: string;
  frontMatter: {
    title: string;
    description: string;
  };
};

export default async function BlogsPage() {
  // read all markdown files inside the blogs folder
  const posts = readdirSync("./blogs", { withFileTypes: true });
  console.log({ posts });

  return (
    <div>
      <h1>Blog</h1>
      {JSON.stringify(posts)}
    </div>
  );
}
