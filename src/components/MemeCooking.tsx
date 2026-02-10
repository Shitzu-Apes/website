import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MemeCookingBanner from "@/assets/MemeCooking.png"; // Assuming you have this image asset

export default function MemeCooking() {
  return (
    <div className="section bg-[#45EBA5]">
      <div className="section-inner flex h-full flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <h2 className="section-title">MEME.COOKING</h2>
          <p className="section-lead">
            Meme.Cooking is a revolutionary meme token launchpad on NEAR
            Protocol, offering a fair, secure, and community-driven experience.
            With features like staking-based auctions, locked liquidity, and a
            refund mechanism, we’re changing the game for meme tokens.
          </p>
          <div className="mt-10">
            <Link href="https://meme.cooking" target="_blank" className="btn-primary">
              Visit Meme.Cooking
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="media-frame">
            <img
              src={MemeCookingBanner.src}
              alt="Meme.Cooking Banner"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
