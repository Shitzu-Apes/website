"use client";

import Clipboard from "@/components/Clipboard";

import {
  DexTool,
  DexScreenerLogo,
  NearBlocksLogo,
  RefFinanceLogo,
} from "./Icons";

export default function ChainTab() {
  return (
    <div className="w-full flex flex-col justify-center items-stretch">
      <div className="flex flex-col md:flex-row items-stretch md:items-center mb-4 gap-3 w-full">
        <Clipboard value="token.0xshitzu.near" />
        <a
          className="btn-outline-primary btn-sm w-full md:max-w-36 relative font-mono"
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
          className="btn-outline-primary btn-sm w-full md:w-fit relative font-mono"
          href="https://x.rhea.finance/trade"
          target="_blank"
          rel="noreferrer"
        >
          <span className="whitespace-nowrap">Buy on</span>
          <img
            src={RefFinanceLogo.src}
            alt="Rhea Finance Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          <span className="whitespace-nowrap">Rhea Finance</span>
        </a>
        <a
          className="btn-outline-primary btn-sm w-full md:w-fit relative font-mono"
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
        <a
          href="https://www.dextools.io/app/en/near/pair-explorer/4369"
          className="btn-outline-primary btn-sm w-full md:w-fit relative font-mono"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={DexTool.src}
            alt="Dexscreener Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          DEXTools
        </a>
      </div>
    </div>
  );
}
