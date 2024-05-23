"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const closeDate = new Date("2024-06-15");
function getCountdown() {
  const countDown = closeDate.getTime() - new Date().getTime();

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function BottomBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [countdown, setCountDown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    setCountDown(getCountdown());

    const interval = setInterval(() => {
      setCountDown(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return isBannerVisible ? (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-10">
      <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-red-600 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="text-sm leading-6 text-white">
          <Link href="/blog/2024-05-15-bridge-poll">
            <BellAlertIcon className="h-5 w-5 inline mx-2" aria-hidden="true" />
            Hurry up! The bridge will be closed{" "}
            {countdown ? (
              <>
                in {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
                {countdown.seconds}s<span aria-hidden="true">&rarr;</span>
              </>
            ) : (
              "by June 15th, 2024"
            )}
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
