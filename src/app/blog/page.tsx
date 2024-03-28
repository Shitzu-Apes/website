import { readFileSync, readdirSync } from "fs";

import { BlogMetadata } from "@/utils/blog";
import { readFrontmatter } from "@/utils/markdown";
import Link from "next/link";
import toDataURL from "@/utils/toDataURL";

export default async function BlogPage() {
  let files = readdirSync("./blogs", { withFileTypes: true });

  files.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });

  const blogs = [];
  for await (const file of files) {
    const frontmatter = await readFrontmatter(`./blogs/${file.name}/readme.md`);

    // find thumbnail.* in the blog folder
    const files = readdirSync(`./blogs/${file.name}`);
    const thumbnail = files.find((file) => file.startsWith("thumbnail"));

    // if thumbnail exists, read and convert it to base64
    let thumbnailBase64 = thumbnail
      ? toDataURL(`./blogs/${file.name}/${thumbnail}`)
      : "";

    const metadata = BlogMetadata.parse({
      ...(frontmatter.data.matter as Object),
      slug: file.name,
      thumbnail: thumbnailBase64,
    });
    blogs.push(metadata);
  }

  return (
    <div className="bg-primary-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-h-[100vh]">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover the latest news and updates from our OGs.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {blogs.map((blog) => (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.title}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={blog.thumbnail}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={blog.date} className="text-gray-500">
                      {blog.date}
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {blog.tags[0]}
                    </div>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {blog.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
