"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

export default function IntroPage() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  const stars = useMemo(() => {
    // Stable star positions (generated once on client)
    return Array.from({ length: 70 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 70,
      r: Math.random() * 1.3,
      o: Math.random() * 0.55 + 0.15,
    }));
  }, []);

  function onStart() {
    if (opening) return;
    setOpening(true);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.setTimeout(
      () => {
        router.push("/portfolio");
      },
      prefersReduced ? 0 : 850
    );
  }

  return (
    <main
      className={[
        "relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100",
        opening ? "curtain-opening" : "",
      ].join(" ")}
    >
      {/* stage / lights */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.10),transparent_55%)] opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 opacity-35">
          <svg className="w-full h-full" preserveAspectRatio="none">
            {stars.map((s, i) => (
              <circle
                key={i}
                cx={`${s.x}%`}
                cy={`${s.y}%`}
                r={s.r}
                fill="white"
                opacity={s.o}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* center UI */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div
          className={[
            "transition-all duration-500",
            opening ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100",
          ].join(" ")}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Mujia Chen
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300">
            Portfolio
          </p>

          <button
            type="button"
            onClick={onStart}
            disabled={opening}
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500/80 via-pink-500/75 to-sky-500/80 gradient-animated px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-95 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70"
            aria-label="Start"
          >
            <Play size={18} />
            Start
          </button>
        </div>
      </div>

      {/* curtains */}
      <div className="curtain-panel curtain-left" aria-hidden />
      <div className="curtain-panel curtain-right" aria-hidden />
    </main>
  );
}
