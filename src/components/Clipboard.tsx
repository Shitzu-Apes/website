"use client";

import React from "react";

import { copyToClipboard } from "@/utils/clipboard";

type CopyStatus = "idle" | "copied" | "failed";

export default function Clipboard({ value }: { value: string }) {
  const [status, setStatus] = React.useState<CopyStatus>("idle");
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  async function handleCopy() {
    const copied = await copyToClipboard(value);

    setStatus(copied ? "copied" : "failed");
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 2000);
  }

  const label =
    status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : null;

  return (
    <div className="w-full">
      <button
        type="button"
        className="w-full relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary text-ellipsis"
        onClick={handleCopy}
        aria-live="polite"
      >
        {value.length > 20 ? `${value.slice(0, 8)}...${value.slice(-8)}` : value}
        {label && <span className="sr-only">{label}</span>}
        <span className="border-s ps-3.5 dark:border-gray-700 ml-auto">
          {status === "failed" ? (
            <svg
              className="w-4 h-4 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6M9 9l6 6" />
            </svg>
          ) : status === "copied" ? (
            <svg
              className="w-4 h-4 text-blue-600 rotate-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 group-hover:rotate-6 transition text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
