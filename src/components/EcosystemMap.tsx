import { ArrowRightIcon } from "@heroicons/react/24/outline";
import EcosystemMapImage from "@/assets/ecosystem-map.webp";

export default function EcosystemMap() {
  return (
    <div className="w-full bg-[#45EBA5] py-10">
      <div className="w-full h-full max-w-landing mx-auto flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 px-5 sm:pl-10 mt-10 sm:mt-0">
          <h2 className="text-2xl font-bold tracking-tight sm:text-5xl text-gray-900">
            NEAR Protocol Ecosystem Map
          </h2>
          <h3 className="mt-10">
            An interactive visualization of the NEAR Protocol ecosystem, showcasing projects,
            categories, and their development status. Features include category-based filtering,
            development status indicators, and detailed project information with social links
            and token data.
          </h3>
          <div className="w-full">
            <div className="flex gap-5 flex-wrap">
              <a
                className="mt-14 cursor-pointer rounded-lg text-center bg-black text-white px-10 py-3 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-gray-800"
                href="https://nearprotocol.eco"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center">
                  Explore the Ecosystem{" "}
                  <ArrowRightIcon className="h-6 w-6 ml-2" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 h-full mx-5 px-5 md:px-0">
          <img
            className="rounded-lg border-[#32B37D] border-4"
            src={EcosystemMapImage.src}
            alt="NEAR Protocol Ecosystem Map"
          />
        </div>
      </div>
    </div>
  );
} 