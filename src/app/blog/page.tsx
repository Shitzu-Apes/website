import { readdirSync } from "fs";

import { BlogMetadata } from "@/utils/blog";
import { readFrontmatter } from "@/utils/markdown";
import Link from "next/link";
import toDataURL from "@/utils/toDataURL";

export default async function BlogPage() {
  let blogDirs = readdirSync("./blogs", { withFileTypes: true });

  blogDirs.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });

  const blogs = [];
  for await (const dir of blogDirs) {
    const frontmatter = await readFrontmatter(`./blogs/${dir.name}/readme.md`);

    // find thumbnail.* in the blog folder
    const dirFiles = readdirSync(`./blogs/${dir.name}`);
    const thumbnail = dirFiles.find((file) =>
      file.toLowerCase().match(/^thumbnail\.(png|webp|jpeg|jpg)$/)
    );

    // if thumbnail exists, read and convert it to base64
    let thumbnailBase64 = thumbnail
      ? toDataURL(`./blogs/${dir.name}/${thumbnail}`)
      : "";

    const metadata = BlogMetadata.parse({
      ...(frontmatter.data.matter as Object),
      slug: dir.name,
      thumbnail: thumbnailBase64,
    });
    blogs.push(metadata);
  }

  return (
    <div className="min-h-[100vh] bg-primary-light">
      <div className="mx-auto w-full max-w-landing px-5 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-mono text-gray-900/80">SHITZU Blog</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            News, updates, and stories
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-900/70">
            Discover the latest posts from the community and the team.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.slug}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm backdrop-blur transition hover:border-black/20 hover:bg-white/80 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
                {blog.thumbnail ? (
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black/10 to-black/0 text-sm text-gray-900/60">
                    No thumbnail
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
              </div>

              <div className="flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <time
                    dateTime={blog.date}
                    className="text-xs font-mono text-gray-900/60"
                  >
                    {blog.date}
                  </time>
                  <div className="flex flex-wrap justify-end gap-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span
                        key={`${blog.slug}-${tag}`}
                        className="rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-[11px] font-medium text-gray-900/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="mt-3 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-black">
                  {blog.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-900/70">
                  {blog.description}
                </p>

                <div className="mt-5 text-sm font-mono text-gray-900/80">
                  Read →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
