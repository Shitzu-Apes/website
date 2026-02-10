import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Breadcrumbs({
  name,
  href,
  variant = "light",
}: {
  name: string;
  href: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const linkClass = isDark ? "text-white/70 hover:text-white" : "text-gray-700 hover:text-gray-900";
  const chevronClass = isDark ? "text-white/40" : "text-gray-500";

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className={linkClass}>
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className={`h-5 w-5 flex-shrink-0 ${chevronClass}`}
              aria-hidden="true"
            />
            <Link
              href="/blog"
              className={`ml-4 text-sm font-medium ${linkClass}`}
            >
              Blog
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className={`h-5 w-5 flex-shrink-0 ${chevronClass}`}
              aria-hidden="true"
            />
            <Link
              href={`/blog/${href}`}
              className={`ml-4 text-sm font-medium ${linkClass}`}
            >
              {name}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
