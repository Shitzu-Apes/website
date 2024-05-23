import ChainTab from "@/components/ChainTab";
import Scene from "@/components/Scene";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import HeroBackground from "./HeroBackground";
import { NearOutlineIcon, TelegramIcon } from "./Icons";

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] w-full px-3 md:px-0">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <HeroBackground />
      </div>

      <div className="w-full max-w-landing flex flex-col-reverse md:flex-row place-items-center mx-auto">
        <div className="w-full md:w-3/5 h-full text-4xl md:text-8xl font-bold text-white md:px-10 flex flex-col items-start justify-start">
          <div className="w-full">
            <span className="text-primary">SHITZU</span>
          </div>
          <div className="w-full max-w-2xl text-base md:text-2xl font-light text-left text-white mt-5 leading-relaxed">
            "FYI, Shitzu chat is the OG grassroots incubator of{" "}
            <span className="text-primary inline-flex items-center gap-2 align-bottom font-bold">
              <NearOutlineIcon className="h-6 w-6 inline text-primary" /> NEAR
            </span>{" "}
            We have become that by doing the impossible, resurrecting a rugged
            meme. We are not here for exit liquidity, We r your liquidity." -
            @agt_21
          </div>

          <div className="mt-10 flex items-center">
            <a
              href="https://t.me/Shitzu_Community"
              target="_blank"
              className="px-16 py-4 bg-primary text-black rounded-lg text-2xl mr-5"
            >
              Join Shitzu Chat{" "}
              <TelegramIcon className="h-10 w-10 ml-2 inline" />
            </a>
            <a
              href="https://app.shitzuapes.xyz/"
              target="_blank"
              className="px-12 py-4 text-primary text-2xl border-2 border-primary rounded-lg"
            >
              Launch App <ArrowRightIcon className="h-8 w-8 ml-2 inline" />
            </a>
          </div>
          <div className="mr-auto flex flex-col justify-stretch items-stretch text-lg mt-16 w-full max-w-lg">
            <span className="text-xl">Find us on</span>
            <div className="mt-3 w-full ">
              <ChainTab />
            </div>
          </div>
          <button></button>
        </div>

        <div className="w-full md:w-2/5 h-[450px] md:min-h-[100vh]">
          <Scene />
        </div>
      </div>
    </div>
  );
}
