import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MemeCookingBanner from "@/assets/MemeCooking.png"; // Assuming you have this image asset

export default function MemeCooking() {
  return (
    <div className="w-full bg-primary py-10">
      <div className="w-full max-w-landing mx-auto h-full flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 px-5 sm:pr-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
            MEME.COOKING
          </h2>
          <h3 className="mt-10">
            Meme.Cooking is a revolutionary meme token launchpad on NEAR
            Protocol, offering a fair, secure, and community-driven experience.
            With features like staking-based auctions, locked liquidity, and a
            refund mechanism, we're changing the game for meme tokens.
          </h3>
          <div className="w-full mt-10">
            <Link
              href="https://meme.cooking"
              target="_blank"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Visit Meme.Cooking
              <ArrowRightIcon
                className="ml-2 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
          <img
            src={MemeCookingBanner.src}
            alt="Meme.Cooking Banner"
            className="w-full h-auto rounded-lg border-4 border-emerald-950"
          />
        </div>
      </div>
    </div>
  );
}
