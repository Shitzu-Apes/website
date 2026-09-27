import { readFileSync, readdirSync } from "fs";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import mdnameUtils from "@/utils/mdname";
import Breadcrumbs from "@/components/BreadCrumbs";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import toDataURL from "@/utils/toDataURL";
import { readFrontmatter, stripMarkdown } from "@/utils/markdown";
import { absoluteUrl } from "@/utils/site";
import { BlogMetadata as BlogMetadataSchema } from "@/utils/blog";

type BlogMetadata = { slug: string };

export async function generateMetadata(
  { params }: { params: BlogMetadata },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = readFileSync(`./blogs/${params.slug}/readme.md`, "utf-8");

  const frontmatter = post.split("---")[1];
  const rawTitle = frontmatter.match(/title: (.*)/)?.[1];
  const rawDescription = frontmatter.match(/description: (.*)/)?.[1];

  // `rawTitle && ...` rather than string concatenation, so a missing title
  // falls through to the parent instead of yielding "undefined - SHITZU".
  const title = rawTitle ? `${rawTitle} - SHITZU` : (await parent).title || "";
  const description =
    (rawDescription && stripMarkdown(rawDescription)) ||
    (await parent).description ||
    "";

  const files = readdirSync(`./blogs/${params.slug}`);
  const thumbnail = files.find((file) =>
    file.toLowerCase().match(/^thumbnail\.(png|webp|jpeg|jpg)$/)
  );

  if (thumbnail) {
    const thumbnailPath = absoluteUrl(
      `/blog/${params.slug}/${thumbnail}`
    );

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: thumbnailPath,
          },
        ],
      },
      twitter: {
        title,
        description,
        images: [
          {
            url: thumbnailPath,
          },
        ],
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  return {
    title,
    description,
    openGraph: {
      images: [...previousImages],
    },
  };
}

export default async function BlogPage({
  params: { slug },
}: {
  params: BlogMetadata;
}) {
  const post = readFileSync(`./blogs/${slug}/readme.md`, "utf-8");
  const frontmatter = await readFrontmatter(`./blogs/${slug}/readme.md`);

  const files = readdirSync(`./blogs/${slug}`);
  const thumbnail = files.find((file) =>
    file.toLowerCase().match(/^thumbnail\.(png|webp|jpeg|jpg)$/)
  );
  const thumbnailBase64 = thumbnail
    ? toDataURL(`./blogs/${slug}/${thumbnail}`)
    : "";

  const metadata = BlogMetadataSchema.parse({
    ...(frontmatter.data.matter as Object),
    slug,
    thumbnail: thumbnailBase64,
  });

  return (
    <div className="min-h-[100vh] bg-primary-light">
      <div className="mx-auto w-full max-w-landing px-5 py-10 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumbs name={metadata.title} href={slug} variant="light" />
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            ← Back to blog
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left sidebar (image + meta) */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              {metadata.thumbnail ? (
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold tracking-wide text-gray-900">
                      Featured
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-black/5">
                    <img
                      src={metadata.thumbnail}
                      alt={metadata.title}
                      className="max-h-[220px] w-full object-contain"
                    />
                  </div>
                </div>
              ) : null}

              <div className="mt-6 rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur">
                <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                  Post details
                </h2>

                <dl className="mt-4 space-y-4 text-sm text-gray-900/70">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-medium text-gray-900">Date</dt>
                    <dd className="font-mono">{metadata.date}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-medium text-gray-900">Author</dt>
                    <dd className="text-right">{metadata.author}</dd>
                  </div>
                </dl>

                {metadata.tags?.length ? (
                  <div className="mt-5">
                    <div className="text-sm font-medium text-gray-900">
                      Tags
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {metadata.tags.slice(0, 10).map((tag) => (
                        <span
                          key={`${metadata.slug}-${tag}`}
                          className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-900/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </aside>

          {/* Main column (right) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <header className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur sm:p-10">
              <p className="text-sm font-mono text-gray-900/70">SHITZU Blog</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {metadata.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-900/70">
                {metadata.description}
              </p>
            </header>

            <article className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
              <Markdown
                remarkPlugins={[remarkGfm, remarkFrontmatter]}
                className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:text-gray-900/80 prose-li:text-gray-900/80 prose-strong:text-gray-900 prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-black/30 hover:prose-a:decoration-black prose-code:text-gray-900 prose-pre:bg-black prose-pre:text-white"
                components={{
                  img: ({ node, ...props }) => {
                    const src = props.src?.replace(/^\.\//, "") ?? "";
                    const commonClassName =
                      "rounded-2xl border border-black/10 bg-black/5";

                    // If the markdown includes the thumbnail at the top, avoid duplicating it
                    if (thumbnail && src === thumbnail) {
                      return null;
                    }

                    if (src.endsWith("mp4")) {
                      const dataURL = toDataURL(`./blogs/${slug}/${src}`);
                      return (
                        <video
                          className={commonClassName}
                          src={dataURL}
                          controls
                        />
                      );
                    }

                    // Handle external images that start with http/https
                    if (src.startsWith("http")) {
                      return (
                        <img
                          {...props}
                          alt={props.alt ?? ""}
                          className={commonClassName}
                          loading="lazy"
                        />
                      );
                    }

                    const dataURL = toDataURL(`./blogs/${slug}/${src}`);
                    return (
                      <img
                        {...props}
                        alt={props.alt ?? ""}
                        className={commonClassName}
                        src={dataURL}
                        loading="lazy"
                      />
                    );
                  },
                  a: ({ node, ...props }) => {
                    if ("href" in props === false || !props.href) {
                      return <a {...props} />;
                    }
                    if (props.href.startsWith("http")) {
                      return (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                          {props.children}
                        </a>
                      );
                    }

                    const href = props.href.replace(/^\//, "");
                    return (
                      <a {...props} href={`/${href}`}>
                        {props.children}
                      </a>
                    );
                  },
                  table: ({ node, ...props }) => {
                    return (
                      <div className="overflow-x-auto">
                        <table
                          {...props}
                          className="min-w-full divide-y divide-gray-700 border-collapse bg-shitzu/20"
                        />
                      </div>
                    );
                  },
                  th: ({ node, ...props }) => {
                    return (
                      <th
                        {...props}
                        className="bg-primary px-4 py-4 text-left text-sm font-bold text-black"
                      />
                    );
                  },
                  td: ({ node, ...props }) => {
                    return (
                      <td
                        {...props}
                        className="whitespace-nowrap px-4 py-4 text-sm hover:bg-shitzu/10 transition-colors"
                      />
                    );
                  },
                }}
              >
                {post}
              </Markdown>
            </article>
          </div>
        </div>
      </div>
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
