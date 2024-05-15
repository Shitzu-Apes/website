"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function BottomBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return isBannerVisible ? (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-10">
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-red-600 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white">
          <Link href="/blog/2024-05-15-bridge-poll">
            <BellAlertIcon className="h-5 w-5 inline mx-2" aria-hidden="true" />
            Hurry up! The bridge will be closed by Mid June 2024.{" "}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
        <button type="button" className="-m-1.5 flex-none p-1.5">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon
            onClick={() => setIsBannerVisible(false)}
            className="h-5 w-5 text-white"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  ) : null;
}
