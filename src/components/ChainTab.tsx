"use client";

import Clipboard from "@/components/Clipboard";

import { DexScreenerLogo, NearBlocksLogo, RefFinanceLogo } from "./Icons";

export default function ChainTab() {
  return (
    <div className="w-full flex flex-col justify-center items-stretch">
      <div className="flex flex-col md:flex-row items-stretch md:items-center mb-4 gap-3 w-full">
        <Clipboard value="token.0xshitzu.near" />
        <a
          className="w-full md:max-w-36 relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
          href="https://nearblocks.io/token/token.0xshitzu.near"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={NearBlocksLogo.src}
            alt="Nearblocks Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          Explorer
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-stretch md:items-center mb-4 gap-3">
        <a
          className="w-full md:w-fit relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
          href="https://app.ref.finance/#token.0xshitzu.near|near"
          target="_blank"
          rel="noreferrer"
        >
          BUY on
          <img
            src={RefFinanceLogo.src}
            alt="Ref Finance Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          Ref Finance
        </a>
        <a
          className="w-full md:w-fit relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
          href="https://dexscreener.com/near/refv1-4369"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={DexScreenerLogo.src}
            alt="Dexscreener Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          Dexscreener
        </a>
      </div>
    </div>
  );
}
