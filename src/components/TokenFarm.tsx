import ShitzuFarm from "@/assets/tokenfarm.webp";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function TokenFarm() {
  return (
    <div className="section bg-[#32B37D]">
      <div className="section-inner flex h-full flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <div className="media-frame">
            <img
              className="w-full h-auto"
              src={ShitzuFarm.src}
              alt="Shitzu Farm"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <h2 className="section-title">SHITZU Token Farm</h2>
          <p className="section-lead">
            SHITZU community forked tkn.farm and modernized its functionality.
            We give SHITZU Revival NFT Holder enjoy <b>exclusive access</b> to
            the token deployment functionality. The site also provides a list of
            all tkn.near and its liquidity pool on Ref Finance.
          </p>
          <div className="mt-10">
            <a
              className="btn-primary"
              href={"https://tkn.shitzuapes.xyz"}
              target="_blank"
              rel="noreferrer"
            >
              Visit SHITZU Token Farm <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
