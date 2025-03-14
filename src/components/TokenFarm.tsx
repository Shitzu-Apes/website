import ShitzuFarm from "@/assets/tokenfarm.webp";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function TokenFarm() {
  return (
    <div className="w-full bg-[#32B37D] py-10">
      <div className="w-full h-full max-w-landing mx-auto flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 h-full mx-5 px-5 md:px-0">
          <img
            className="rounded-lg border-white border-4"
            src={ShitzuFarm.src}
            alt="Shitzu Farm"
          />
        </div>

        <div className="w-full sm:w-1/2 px-5 sm:pl-10 mt-10 sm:mt-0">
          <h2 className="text-2xl font-bold tracking-tight sm:text-5xl text-gray-900">
            SHITZU Token Farm
          </h2>
          <h3 className="mt-10">
            SHITZU community forked tkn.farm and modernized its functionality.
            We give SHITZU Revival NFT Holder enjoy <b>exclusive access</b> to
            the token deployment functionality. The site also provides a list of
            all tkn.near and its liquidity pool on Ref Finance.
          </h3>
          <div className="w-full">
            <div className="flex gap-5 flex-wrap">
              <a
                className="mt-14 cursor-pointer rounded-lg text-center bg-black text-white px-10 py-3 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-gray-800"
                href={"https://tkn.shitzuapes.xyz"}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center">
                  Visit SHITZU Token Farm{" "}
                  <ArrowRightIcon className="h-6 w-6 ml-2" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
