"use client";

import dynamic from "next/dynamic";

// three.js is ~660 kB of the initial bundle and is only needed once the page
// has hydrated, so it is kept out of the critical path entirely.
const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden="true" />,
});

export default function SceneLoader() {
  return <Scene />;
}
