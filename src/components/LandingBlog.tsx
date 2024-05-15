import { TBlogMetadata } from "@/utils/blog";
import Link from "next/link";

export default function LandingBlog({ blogs }: { blogs: TBlogMetadata[] }) {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-5 sm:px-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover the latest news and updates from our OGs.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.date} className="text-gray-700">
                  {blog.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {blog.tags[0]}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${blog.slug}`}>
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center">
          <Link href="/blog" className="ml-auto">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
}
