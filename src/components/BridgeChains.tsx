import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

import { NearOutlineIcon } from "@/components/Icons";

const CHAINS = [
  "Ethereum",
  "Bitcoin",
  "Solana",
  "BNB Chain",
  "Base",
  "Arbitrum",
  "Polygon",
  "Zcash",
];

export default function BridgeChains() {
  return (
    <div className="card flex w-full flex-col items-center gap-6 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-primary">
          <NearOutlineIcon className="h-8 w-8" />
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-gray-900">NEAR</div>
          <div className="text-xs text-gray-900/60">Chain Signatures · MPC</div>
        </div>
      </div>

      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:justify-center sm:gap-6">
        <p className="flex items-center justify-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-xs font-medium text-gray-900/80">
          <ArrowDownIcon className="h-4 w-4 flex-none text-primary-dark" />
          NEAR to EVM &amp; Solana
          <span className="font-bold text-gray-900">~30s</span>
        </p>
        <p className="flex items-center justify-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-xs font-medium text-gray-900/80">
          <ArrowUpIcon className="h-4 w-4 flex-none text-primary-dark" />
          EVM to NEAR
          <span className="font-bold text-gray-900">~20 min</span>
        </p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-2">
        {CHAINS.map((chain) => (
          <li
            key={chain}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-900"
          >
            {chain}
          </li>
        ))}
      </ul>
    </div>
  );
}
