import Link from "next/link";
import { CoingeckoLogo } from "./Icons";

export default function Tokenomics() {
  return (
    <div className="mx-auto">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-landing text-3xl font-bold font-mono tracking-tight sm:text-5xl text-primary">
          576,167,000
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Being born on April Fool's,{" "}
          <span className="text-primary text-bold">$SHITZU</span> keeps it
          foolishly simple:
          <span className="text-primary text-bold"> 576,167,000</span> tokens,
          period. All circulating, no lock-ups, no vesting.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.coingecko.com/en/coins/shitzu"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white inline-flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CoingeckoLogo.src} className="h-5 w-5 mr-2" />
            Coingecko
          </a>
          <Link
            href="/blog/2022-04-01-introduction"
            className="text-sm font-semibold leading-6 text-white inline-flex items-center"
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
