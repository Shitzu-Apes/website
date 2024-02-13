"use client";

import { Tab } from "@headlessui/react";
import Clipboard from "@/components/Clipboard";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {
  AuroraLogo,
  DexScreenerLogo,
  NearBlocksLogo,
  NearLogo,
  RefFinanceLogo,
  TrisolarisLogo,
} from "./Icons";
import Link from "next/link";

export default function ChainTab() {
  return (
    <Tab.Group>
      <Tab.List className={"flex mb-5 w-full md:w-auto"}>
        <Tab
          className={({ selected }) =>
            `flex items-center border-2 border-r-0 px-3 py-1 rounded-l-md w-1/2 md:w-auto ${
              selected ? "bg-white text-primary" : ""
            }`
          }
        >
          <img
            src={NearLogo.src}
            alt="Near Protcol"
            className="w-5 h-5 mr-2 rounded-full"
          />
          Near (v2)
        </Tab>
        <Tab
          className={({ selected }) =>
            `flex items-center border-2 px-3 py-1 rounded-r-md w-1/2 md:w-auto ${
              selected ? "bg-white text-primary" : ""
            }`
          }
        >
          <img
            src={AuroraLogo.src}
            alt="Aurora"
            className="w-5 h-5 mr-2 rounded-full"
          />
          Aurora (v1)
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={"w-full md:w-auto"}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center mb-4 gap-3">
            <Clipboard value="token.0xshitzu.near" />
            <a
              className="w-full md:w-fit relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
              href="https://nearblocks.io/token/token.0xshitzu.near"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={NearBlocksLogo.src}
                alt="Nearblocks Logo"
                className="h-6 mx-1 w-auto rounded-full"
              />
              Explorer
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center mb-4 gap-3">
            <a
              className="w-full md:w-fit relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
              href="https://app.ref.finance/#token.0xshitzu.near|near"
              target="_blank"
              rel="noreferrer"
            >
              BUY on
              <img
                src={RefFinanceLogo.src}
                alt="Ref Finance Logo"
                className="h-6 mx-1 w-auto rounded-full"
              />
              Ref Finance
            </a>
            <a
              className="w-full md:w-fit relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
              href="https://dexscreener.com/near/refv1-4369"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DexScreenerLogo.src}
                alt="Dexscreener Logo"
                className="h-6 mx-1 w-auto rounded-full"
              />
              Dexscreener
            </a>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="mb-4">
            <Clipboard value="0x68e401b61ea53889505cc1366710f733a60c2d41" />
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center mb-4 gap-3">
            <a
              className="w-full md:w-fit relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
              href="https://www.trisolaris.io/#/swap?outputCurrency=0xB12BFcA5A55806AaF64E99521918A4bf0fC40802&inputCurrency=0x68e401B61eA53889505cc1366710f733A60C2d41"
              target="_blank"
              rel="noreferrer"
            >
              BUY on
              <img
                src={TrisolarisLogo.src}
                alt="Trisolaris Logo"
                className="h-6 mx-2 w-auto rounded-full"
              />
              Trisolaris
            </a>
            <div className="w-full md:w-fit flex items-center gap-2">
              <a
                href="https://near.org/marior.near/widget/ShitzuMigrate"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center flex-1 relative py-3 px-4 items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary hover:bg-primary"
              >
                Migrate
                <img
                  src={AuroraLogo.src}
                  alt="Aurora Logo"
                  className="h-6 mx-2 w-auto rounded-full"
                />
                →
                <img
                  src={NearLogo.src}
                  alt="Near Logo"
                  className="h-6 mx-1 w-auto rounded-full"
                />
              </a>
              <Link
                href="/blog/2024-01-01-migration"
                target="_blank"
                rel="noreferrer"
              >
                <InformationCircleIcon className="h-8 text-primary" />
              </Link>
            </div>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
