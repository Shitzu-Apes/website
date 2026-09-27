"use client";

import type { ReactNode } from "react";

import Clipboard from "@/components/Clipboard";
import {
  DexTool,
  DexScreenerLogo,
  NearBlocksLogo,
  RefFinanceLogo,
} from "./Icons";

const NEAR_CONTRACT = "token.0xshitzu.near";
const SOLANA_CONTRACT = "AFbJW5rdaGidnF6o8ZqTtkDBpq3fotSBdJN8fGRN3VRS";
const WRAPPED_SOL = "So11111111111111111111111111111111111111112";

function LinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`btn-outline-primary btn-sm w-full md:w-fit relative font-mono ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function ChainGroup({
  name,
  contract,
  children,
}: {
  name: string;
  contract: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
        {name}
      </span>
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        <Clipboard value={contract} />
      </div>
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:flex-wrap">
        {children}
      </div>
    </div>
  );
}

export default function ChainTab() {
  return (
    <div className="flex w-full flex-col items-stretch gap-8">
      <ChainGroup name="NEAR" contract={NEAR_CONTRACT}>
        <LinkButton href={`https://nearblocks.io/token/${NEAR_CONTRACT}`}>
          <img
            src={NearBlocksLogo.src}
            alt="Nearblocks Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          Explorer
        </LinkButton>
        <LinkButton href="https://x.rhea.finance/trade">
          <span className="whitespace-nowrap">Buy on</span>
          <img
            src={RefFinanceLogo.src}
            alt="Rhea Finance Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          <span className="whitespace-nowrap">Rhea Finance</span>
        </LinkButton>
        <LinkButton href="https://dexscreener.com/near/refv1-4369">
          <img
            src={DexScreenerLogo.src}
            alt="Dexscreener Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          Dexscreener
        </LinkButton>
        <LinkButton href="https://www.dextools.io/app/en/near/pair-explorer/4369">
          <img
            src={DexTool.src}
            alt="DEXTools Logo"
            className="h-6 mx-1 w-auto rounded-full"
          />
          DEXTools
        </LinkButton>
      </ChainGroup>

      <ChainGroup name="Solana" contract={SOLANA_CONTRACT}>
        <LinkButton href={`https://solscan.io/token/${SOLANA_CONTRACT}`}>
          Explorer
        </LinkButton>
        <LinkButton
          href={`https://jup.ag/?sell=${WRAPPED_SOL}&buy=${SOLANA_CONTRACT}`}
        >
          <span className="whitespace-nowrap">Swap on</span>
          <span className="whitespace-nowrap">Jupiter</span>
        </LinkButton>
      </ChainGroup>
    </div>
  );
}
