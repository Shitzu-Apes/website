"use client";

import { RandomAvatar } from "react-random-avatars";

export default function Avatar({ name }: { name: string }) {
  return (
    <div className="relative mt-6 flex items-center gap-x-4">
      <RandomAvatar name={name} mode="colors" size={32} />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <span>
            <span className="absolute inset-0" />
            {name}
          </span>
        </p>
      </div>
    </div>
  );
}
