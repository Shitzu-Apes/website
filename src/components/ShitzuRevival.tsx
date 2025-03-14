import Link from "next/link";

import {
  MintBaseLogo,
  MitteLogo,
  ParasLogo,
  TradeportLogo,
} from "@/components/Icons";
import ShitzuFace from "@/assets/shitzu_face.svg";

const NFT_LINKS = [
  {
    platform: "Paras",
    logo: ParasLogo,
    link: "https://paras.id/collection/shitzu.bodega-lab.near",
  },
  {
    platform: "MintBase",
    logo: MintBaseLogo,
    link: "https://www.mintbase.xyz/contract/shitzu.bodega-lab.near/nfts/all/0",
  },
  {
    platform: "Mitte",
    logo: MitteLogo,
    link: "https://beta.mitte.gg/?contractAddress=shitzu.bodega-lab.near",
  },
  {
    platform: "Tradeport",
    logo: TradeportLogo,
    link: "https://tradeport.xyz/near/collection/shitzu.bodega-lab.near",
  },
];

export default function ShitzuRevival() {
  return (
    <div className="w-full bg-[#32B37D] py-10">
      <div className="w-full max-w-landing mx-auto h-full flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 h-[500px] bg-no-repeat bg-center object-contain"
          style={{ backgroundImage: `url(${ShitzuFace.src})` }}
        ></div>
        <div className="w-full sm:w-1/2 px-5 sm:pr-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900">
            SHITZU Revival NFT
          </h2>
          <h3 className="mt-10">
            In celebration of SHITZU 2nd birthdays, the{" "}
            <b>SHITZU Revival Collection</b> was fully minted within just 129
            seconds, marking the fastest minting event on the NEAR protocol
            since 2022.
          </h3>
          <div className="block my-4">
            <Link
              className="w-fit block ml-auto my-4 hover:underline"
              href="/blog/2024-04-01-shitzu-nft"
            >
              <span>Read more &rarr;</span>
            </Link>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4">Find us on</h3>
            <div className="flex gap-5 flex-wrap">
              {NFT_LINKS.map(({ platform, link, logo }) => {
                return (
                  <a
                    key={link}
                    className="mt-0 sm:mt-6 cursor-pointer rounded-lg w-full sm:w-[40%] text-center bg-black px-3 py-2 text-lg font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-gray-800"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={logo.src}
                        className="w-6 h-6 mr-2"
                        alt={platform}
                      />
                      {platform}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
