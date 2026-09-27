import { ArrowRightIcon } from "@heroicons/react/24/outline";

import BridgeChains from "@/components/BridgeChains";

export default function OmniBridge() {
  return (
    <div className="section bg-gray-900">
      <div className="section-inner flex h-full flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <BridgeChains />
        </div>

        <div className="w-full sm:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            OmniBridge
          </h2>
          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            The front end to the official NEAR Omni Bridge. Move assets
            between NEAR and Ethereum, Solana, BNB Chain, Base and Arbitrum.
          </p>
          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            Outbound transfers are signed by NEAR Chain Signatures, a
            threshold MPC network, so no single entity can forge a signature.
            Inbound transfers are verified with light clients or Wormhole,
            depending on the source chain.
          </p>
          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            Bridge into EVM and put it to work on SHITZU Perps.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="btn-accent"
              href="https://app.shitzuapes.xyz/bridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open OmniBridge <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              className="btn-outline-primary"
              href="https://perps.shitzuapes.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              SHITZU Perps <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
