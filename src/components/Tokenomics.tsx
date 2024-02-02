import Link from "next/link";

export default function Tokenomics() {
  return (
    <div className="mx-auto">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold font-mono tracking-tight sm:text-5xl text-primary">
          576,167,000
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Shitzu is simplicity, there will only be 576,167,000 tokens period.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://app.ref.finance/#near|token.0xshitzu.near"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            target="_blank"
            rel="noreferrer"
          >
            BUY NOW
          </a>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-white"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#ffffff" />
              <stop offset={1} stopColor="#6edcb9" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
