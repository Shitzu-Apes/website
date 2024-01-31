import mdnameUtils from "@/utils/mdname";
import { readdirSync } from "fs";
import Link from "next/link";

export default async function BlogsPage() {
  const posts = readdirSync("./blogs", { withFileTypes: true });

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.name}>
          <h2>{post.name}</h2>
          <Link href={`/blog/${mdnameUtils.slugify(post.name)}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
