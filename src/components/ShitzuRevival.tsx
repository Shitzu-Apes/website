import Link from "next/link";

import ShitzuFace from "@/assets/shitzu_face.svg";
import HotcraftLogo from "@/assets/hotcraft.ico";

// Optional: set this in `.env.local` if you want the button to link somewhere.
// Example: NEXT_PUBLIC_HOTCRAFT_URL=https://hotcraft.example
const HOTCRAFT_URL =
  process.env.NEXT_PUBLIC_HOTCRAFT_URL ??
  "https://hotcraft.art/collection/shitzu.bodega-lab.near";

export default function ShitzuRevival() {
  return (
    <div className="section bg-[#32B37D]">
      <div className="section-inner flex h-full flex-col items-center justify-center gap-10 sm:flex-row">
        <div
          className="w-full sm:w-1/2 h-[500px] bg-no-repeat bg-center object-contain"
          style={{ backgroundImage: `url(${ShitzuFace.src})` }}
        ></div>
        <div className="w-full sm:w-1/2">
          <h2 className="section-title">SHITZU Revival NFT</h2>
          <p className="section-lead">
            In celebration of SHITZU 2nd birthdays, the{" "}
            <b>SHITZU Revival Collection</b> was fully minted within just 129
            seconds, marking the fastest minting event on the NEAR protocol
            since 2022.
          </p>
          <div className="block my-4">
            <Link
              className="w-fit block ml-auto my-4 hover:underline"
              href="/blog/2024-04-01-shitzu-nft"
            >
              <span>Read more &rarr;</span>
            </Link>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-semibold">Find us on</h3>
            <p className="mt-2 text-gray-900/80">
              View the SHITZU Revival collection on Hotcraft.
            </p>

            <a
              className="btn-primary mt-5 w-full sm:w-fit"
              href={HOTCRAFT_URL}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={HotcraftLogo.src}
                className="h-6 w-6"
                alt="Hotcraft"
              />
              <span>Hotcraft</span>
              <span className="text-white/70" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
