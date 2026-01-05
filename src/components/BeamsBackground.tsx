"use client";

import Beams from "@/components/Beams";

export default function BeamsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <div className="relative h-full w-full opacity-40 dark:opacity-50 brightness-110 dark:brightness-125">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={35}
        />
      </div>
    </div>
  );
}
