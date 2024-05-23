import ChainTab from "@/components/ChainTab";
import Scene from "@/components/Scene";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import HeroBackground from "./HeroBackground";
import { NearOutlineIcon, TelegramIcon } from "./Icons";

// const Quotes = [
//   <>
//     Hehe.. Bro remember the day I told you to join Shitzu. This is best hangout
//     place is entire web3
//   </>,
//   <>
//     We are only having this conversation because shitzu is mainly community
//     driven. Other projects won’t even care about our opinions and do what they
//     feel like. More reason Shitzu is goated 🔥❤️💪🏽
//   </>,
//   <>
//     FYI, Shitzu chat is the OG grassroots incubator of{" "}
//     <span className="text-primary inline-flex items-center gap-2 align-bottom font-bold">
//       <NearOutlineIcon className="h-6 w-6 inline text-primary" /> NEAR
//     </span>{" "}
//     We have become that by doing the impossible, resurrecting a rugged meme. We
//     are not here for exit liquidity, We r your liquidity.
//   </>,
// ];

export default function Hero() {
  return (
    <div className="relative min-h-[100vh] w-full px-3 md:px-0">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <HeroBackground />
      </div>

      <div className="w-full max-w-landing flex flex-col-reverse md:flex-row place-items-center mx-auto">
        <div className="w-full md:w-3/5 h-full font-bold text-white md:px-10 flex flex-col items-start justify-start">
          <h1 className="w-full text-primary text-4xl md:text-8xl">SHITZU</h1>
          <h2 className="w-full max-w-2xl text-base md:text-3xl font-bold text-left text-white mt-5 leading-relaxed">
            We are the OG grassroots incubator of{" "}
            <span className="text-primary inline-flex items-center gap-2 align-bottom font-bold">
              <NearOutlineIcon className="h-6 w-6 inline text-primary" /> NEAR
            </span>
            . The best hangout place in entire web3.
          </h2>

          <div className="mt-10 flex items-center">
            <a
              href="https://t.me/Shitzu_Community"
              target="_blank"
              className="px-16 py-4 bg-primary text-black rounded-lg text-2xl mr-5 hover:bg-primary-light hover:text-black"
            >
              Join Shitzu Chat{" "}
              <TelegramIcon className="h-10 w-10 ml-2 inline" />
            </a>
            <a
              href="https://app.shitzuapes.xyz/"
              target="_blank"
              className="px-12 py-4 text-primary text-2xl border-2 border-primary rounded-lg hover:bg-primary-light hover:text-black"
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
