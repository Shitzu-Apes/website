import { readFileSync, readdirSync } from "fs";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

export default async function BlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = readFileSync(`./blogs/${slug}.md`, "utf-8");

  return (
    <div>
      <Markdown
        remarkPlugins={[remarkGfm, remarkFrontmatter]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold" {...props} />
          ),
        }}
      >
        {post}
      </Markdown>
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
