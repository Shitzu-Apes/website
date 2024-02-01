"use client";

import React from "react";

export default function Clipboard({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        className="w-full relative py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-mono rounded-lg border text-white border-primary"
        // border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-clipboard-target="#hs-clipboard-tooltip-on-hover"
        data-clipboard-action="copy"
        data-clipboard-success-text="Copied"
        onClick={(e) => {
          e.preventDefault();

          //@ts-ignore
          navigator.clipboard.writeText(value);

          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      >
        {value}
        <span className="border-s ps-3.5 dark:border-gray-700 ml-auto">
          {!copied ? (
            <svg
              className="w-4 h-4 group-hover:rotate-6 transition text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-blue-600 rotate-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
