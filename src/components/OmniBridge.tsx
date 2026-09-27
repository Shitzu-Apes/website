import { ArrowRightIcon } from "@heroicons/react/24/outline";

import BridgeChains from "@/components/BridgeChains";

export default function OmniBridge() {
  return (
    <div className="section bg-[#32B37D]">
      <div className="section-inner flex h-full flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <BridgeChains />
        </div>

        <div className="w-full sm:w-1/2">
          <h2 className="section-title">OmniBridge</h2>
          <p className="section-lead">
            The front end to the official NEAR Omni Bridge. Move assets
            between NEAR and Ethereum, Bitcoin, Solana, BNB Chain, Base,
            Arbitrum, Polygon and Zcash.
          </p>
          <p className="section-lead">
            Outbound transfers are signed by NEAR Chain Signatures, a
            threshold MPC network, so no single entity can forge a signature.
            Inbound transfers are verified with light clients or Wormhole,
            depending on the source chain.
          </p>
          <div className="mt-10">
            <a
              className="btn-primary"
              href="https://app.shitzuapes.xyz/bridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open OmniBridge <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
