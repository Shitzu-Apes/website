import { readFileSync, readdirSync } from "fs";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import mdnameUtils from "@/utils/mdname";
import mime from "mime";
import Breadcrumbs from "@/components/BreadCrumbs";
import { Metadata, ResolvingMetadata } from "next";
import toDataURL from "@/utils/toDataURL";

type BlogMetadata = { slug: string };

export async function generateMetadata(
  { params }: { params: BlogMetadata },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = readFileSync(`./blogs/${params.slug}/readme.md`, "utf-8");

  const frontmatter = post.split("---")[1];
  const title =
    frontmatter.match(/title: (.*)/)?.[1] + " - SHITZU" ||
    (await parent).title ||
    "";
  const description =
    frontmatter.match(/description: (.*)/)?.[1] ||
    (await parent).description ||
    "";

  const files = readdirSync(`./blogs/${params.slug}`);
  const thumbnail = files.find((file) => file.startsWith("thumbnail"));

  if (thumbnail) {
    const basePath = process.env.BASEPATH ? `${process.env.BASEPATH}/` : "";
    const thumbnailPath = `${process.env.METADATABASE}/${basePath}blog/${params.slug}/${thumbnail}`;

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

  return (
    <div className="bg-primary-light px-6 py-10 md:py-32 lg:px-8 w-full min-h-[100vh]">
      <div className="max-w-[65ch] mx-auto mb-10">
        <Breadcrumbs name={slug} href={slug} />
      </div>
      <Markdown
        remarkPlugins={[remarkGfm, remarkFrontmatter]}
        className={"prose-dark prose mx-auto"}
        components={{
          img: ({ node, ...props }) => {
            if (props.src?.endsWith("mp4")) {
              const dataURL = toDataURL(`./blogs/${slug}/${props.src}`);
              // @ts-ignore
              return <video {...props} src={dataURL} controls />;
            } else {
              readFileSync(`./blogs/${slug}/${props.src}`, "utf-8");
              const dataURL = toDataURL(`./blogs/${slug}/${props.src}`);
              return <img {...props} src={dataURL} />;
            }
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
