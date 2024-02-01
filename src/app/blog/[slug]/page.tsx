import { readFileSync, readdirSync } from "fs";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import mdnameUtils from "@/utils/mdname";
import mime from "mime";

export default async function BlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = readFileSync(`./blogs/${slug}/readme.md`, "utf-8");

  return (
    <div>
      <Markdown
        remarkPlugins={[remarkGfm, remarkFrontmatter]}
        className={"prose prose-slate dark:prose-invert mx-auto mt-10"}
        components={{
          img: ({ node, ...props }) => {
            readFileSync(`./blogs/${slug}/${props.src}`, "utf-8");
            const dataURL = toDataURL(`./blogs/${slug}/${props.src}`);
            return <img {...props} src={dataURL} />;
          },
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
    return {
      slug: mdnameUtils.slugify(post.name),
    };
  });
}

function toDataURL(src: string): string {
  const content = readFileSync(src);
  const mimeType = mime.getType(src);
  const b64 = Buffer.from(content).toString("base64");

  if (!mimeType) {
    return "";
  }

  return `data:${mimeType};base64,${b64}`;
}
