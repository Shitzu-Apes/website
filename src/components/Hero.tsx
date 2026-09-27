import ChainTab from "@/components/ChainTab";
import SceneLoader from "@/components/SceneLoader";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import HeroBackground from "./HeroBackground";
import { NearOutlineIcon, TelegramIcon } from "./Icons";

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] w-full">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <HeroBackground />
      </div>

      <div className="mx-auto w-full max-w-landing px-5 sm:px-10 flex flex-col-reverse md:flex-row place-items-center">
        <div className="w-full md:w-3/5 h-full font-bold text-white pb-6 md:pb-0 md:pr-10 flex flex-col items-start justify-start">
          <h1 className="w-full text-primary text-6xl md:text-8xl">SHITZU</h1>
          <h2 className="w-full max-w-2xl text-2xl md:text-3xl font-bold text-left text-white mt-5 leading-relaxed">
            We are the OG grassroots incubator of{" "}
            <span className="text-primary inline-flex items-center gap-2 align-bottom font-bold">
              <NearOutlineIcon className="h-6 w-6 inline text-primary" /> NEAR
            </span>
            . The best hangout place in all of web3.
          </h2>

          <div className="mt-10 flex flex-col md:flex-row gap-5 items-stretch w-full">
            <a
              href="https://t.me/Shitzu_Community"
              target="_blank"
              className="btn-accent btn-lg w-full max-w-none md:max-w-96 text-center text-xl lg:text-2xl"
            >
              Join Shitzu Chat{" "}
              <TelegramIcon className="w-8 h-8 md:h-10 md:w-10 ml-2 inline" />
            </a>
            <a
              href="https://app.shitzuapes.xyz/"
              target="_blank"
              className="btn-outline-primary btn-lg w-full md:max-w-80 text-center text-xl lg:text-2xl"
            >
              Launch App{" "}
              <ArrowRightIcon className="h-6 md:h-8 w-6 md:w-8 ml-2 inline" />
            </a>
          </div>
          <div className="mx-auto md:ml-0 flex flex-col justify-stretch items-stretch text-lg mt-16 w-full max-w-xl">
            <span className="text-xl">Find us on</span>
            <div className="mt-3 w-full ">
              <ChainTab />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 h-[450px] md:min-h-[100vh]">
          <SceneLoader />
        </div>
      </div>
    </div>
  );
}
