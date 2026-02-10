import { ArrowRightIcon } from "@heroicons/react/24/outline";
import EcosystemMapImage from "@/assets/ecosystem-map.webp";

export default function EcosystemMap() {
  return (
    <div className="section bg-[#45EBA5]">
      <div className="section-inner flex h-full flex-col items-center justify-center gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2 order-2 sm:order-1">
          <h2 className="section-title">NEAR Protocol Ecosystem Map</h2>
          <p className="section-lead">
            An interactive visualization of the NEAR Protocol ecosystem,
            showcasing projects, categories, and their development status.
            Features include category-based filtering, development status
            indicators, and detailed project information with social links and
            token data.
          </p>
          <div className="mt-10">
            <a
              className="btn-primary"
              href="https://nearprotocol.eco"
              target="_blank"
              rel="noreferrer"
            >
              Explore the Ecosystem <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 order-1 sm:order-2">
          <div className="media-frame">
            <img
              className="w-full h-auto"
              src={EcosystemMapImage.src}
              alt="NEAR Protocol Ecosystem Map"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 