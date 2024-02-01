"use client";

import { Tab } from "@headlessui/react";
import Clipboard from "./Clipboard";

export default function ChainTab() {
  return (
    <Tab.Group>
      <Tab.List className={"flex mb-5"}>
        <Tab
          className={({ selected }) =>
            `flex items-center border-2 border-r-0 px-3 rounded-l-md ${
              selected ? "bg-white text-primary" : ""
            }`
          }
        >
          <img
            src="/aurora.png"
            alt="Ethereum"
            className="w-5 h-5 mr-2 rounded-full"
          />
          Aurora
        </Tab>
        <Tab
          className={({ selected }) =>
            `flex items-center border-2 px-3 rounded-r-md ${
              selected ? "bg-white text-primary" : ""
            }`
          }
        >
          <img
            src="/near.png"
            alt="Ethereum"
            className="w-5 h-5 mr-2 rounded-full"
          />
          Near
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="mb-4">
            <Clipboard value="0x68e401b61ea53889505cc1366710f733a60c2d41" />
          </div>
          <div>
            Missed the MIGRATION?
            <button>Read more</button>
            <button>Migrate</button>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <Clipboard value="token.0xshitzu.near" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
