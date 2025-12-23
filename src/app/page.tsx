"use client";

import React from "react";
import { useRouter } from "next/navigation";

// 32x32 pixel map (every row is exactly 32 chars)
// . = transparent
const AVATAR = [
  "................................",
  "................................",
  "..........oooooooooooo..........",
  "........ooHHHHHHHHHHHHoo........",
  ".......oHHhhhhhhhhhhhhHHo.......",
  "......oHhhhhhhHHHHhhhhhhHo......",
  ".....oHhhhhhHHHHHHHHhhhhhHo.....",
  ".....oHhhhhhhhsssshhhhhhhHo.....",
  "....oHhhhhhhsssssssshhhhhhHo....",
  "....oHhhhhhsssssssssshhhhhHo....",
  "....oHhhhsssssssssssssshhhHo....",
  "....oHhhhsssGwgssGwgssshhhHo....",
  "....oHhhhssBgggssgggBsshhhHo....",
  "....oHhhhssssssmssssssshhhHo....",
  ".....ooHHHhhsssssssshhHHHoo.....",
  "....ooHHHhhhoossssoohhhHHoo.....",
  "...oHHhhhHoooddddddoooHhhhHHo...",
  "...oHHhhhHoooddddddoooHhhhHHo...",
  "...oHHhhhHoooDDDDDDoooHhhhHHo...",
  "...ooHHHhhhooDDDDDDooohhHHHoo...",
  "....ooHHhhooDDDDDDooohhHHoo.....",
  "...........ooDDDDDDoo...........",
  "............oobbbboo............",
  ".............obb..bbo...........",
  ".............oo....oo...........",
  "................................",
  "................................",
  "................................",
  "................................",
  "................................",
  "................................",
  "................................",
] as const;

const PAL: Record<string, string> = {
  ".": "transparent",

  // outline
  o: "#2b0f1e",

  // hair
  h: "#f3a7c9",
  H: "#b87a89",

  // skin
  s: "#fff6fb",

  // eyes (soft grey + highlight)
  g: "#d5d9e6",
  G: "#aab0c0",
  w: "#ffffff",

  // blush
  B: "#ffb0d7",

  // clothes (normal top + skirt)
  d: "#ffffff",
  D: "#c7b4ff",

  // shoes
  b: "#1a1a22",

  // mouth
  m: "#c15a8a",
};

function PixelAvatar() {
  const h = AVATAR.length;
  const w = AVATAR[0].length;

  const CAMERA = { x: 3, y: -1, size: 26 };

  return (
    <svg
      viewBox={`${CAMERA.x} ${CAMERA.y} ${CAMERA.size} ${CAMERA.size}`}
      width="100%"
      height="100%"
      shapeRendering="crispEdges"
      aria-label="Pixel avatar"
      role="img"
      className="pxi-avatar"
    >
      {AVATAR.map((row, y) =>
        row.split("").map((ch, x) => {
          if (ch === ".") return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={PAL[ch] ?? "transparent"}
            />
          );
        })
      )}
    </svg>
  );
}


function IconGear() {
  return (
    <svg viewBox="0 0 24 24" className="pxi-ico" aria-hidden>
      <path
        fill="currentColor"
        d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm9.2 3.2-1.9-.3a7.7 7.7 0 0 0-.7-1.6l1.1-1.5-1.8-1.8-1.5 1.1c-.5-.3-1-.5-1.6-.7L14.6 2H9.4l-.3 1.9c-.6.2-1.1.4-1.6.7L6 3.5 4.2 5.3 5.3 6.8c-.3.5-.5 1-.7 1.6L2 8.8v5.2l1.9.3c.2.6.4 1.1.7 1.6l-1.1 1.5 1.8 1.8 1.5-1.1c.5.3 1 .5 1.6.7L9.4 22h5.2l.3-1.9c.6-.2 1.1-.4 1.6-.7l1.5 1.1 1.8-1.8-1.1-1.5c.3-.5.5-1 .7-1.6l1.9-.3v-5.2Z"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="pxi-ico" aria-hidden>
      <path
        fill="currentColor"
        d="M18.3 7.1 16.9 5.7 12 10.6 7.1 5.7 5.7 7.1 10.6 12l-4.9 4.9 1.4 1.4 4.9-4.9 4.9 4.9 1.4-1.4L13.4 12l4.9-4.9Z"
      />
    </svg>
  );
}

export default function Home() {
  const router = useRouter();
  const [phase, setPhase] = React.useState<"boot" | "ready" | "exit">("boot");

  React.useEffect(() => {
    const t = setTimeout(() => setPhase("ready"), 700);
    return () => clearTimeout(t);
  }, []);

  function onStart() {
    if (phase !== "ready") return;
    setPhase("exit");
    setTimeout(() => router.push("/portfolio"), 520);
  }

  return (
    <main className="pxi-root">
      <div className="pxi-bg" aria-hidden />
      <div className="pxi-noise" aria-hidden />
      <div className={`pxi-window ${phase === "exit" ? "is-exit" : ""}`}>
        {/* Title bar */}
        <div className="pxi-titlebar">
          <div className="pxi-titlebar-left">
            <span className="pxi-appdot" aria-hidden />
            <span className="pxi-title">Media Player</span>
          </div>
          <div className="pxi-titlebar-right" aria-hidden>
            <div className="pxi-winbtn">
              <IconGear />
            </div>
            <div className="pxi-winbtn">
              <IconClose />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="pxi-body">
          <div className="pxi-art">
            <div className="pxi-artframe">
              <PixelAvatar />
            </div>
          </div>

          <div className="pxi-info">
            <div className="pxi-track">
              <div className="pxi-track-title">Mujia Chen — Portfolio</div>
              <div className="pxi-track-sub">ui/ux designs • graphics • gameplay systems</div>
            </div>

            <div className="pxi-progressRow">
              <div className={`pxi-progress ${phase === "boot" ? "is-boot" : "is-ready"}`}>
                <div className="pxi-progressFill" />
              </div>
              <div className="pxi-time">{phase === "boot" ? "loading…" : "ready"}</div>
            </div>

            {/* Decorative controls (not clickable) */}
            <div className="pxi-controls" aria-hidden>
              <span className="pxi-ctrl">◀</span>
              <span className="pxi-ctrl">❚❚</span>
              <span className="pxi-ctrl">▶</span>
            </div>

            {/* ONLY real action */}
            <button className="pxi-start" onClick={onStart} disabled={phase !== "ready"}>
              <span className="pxi-startIcon" aria-hidden>
                ▶
              </span>
              START
            </button>

            <div className="pxi-tray" aria-hidden>
              <span className="pxi-traydot" />
              <span className="pxi-traydot" />
              <span className="pxi-traydot" />
              <span className="pxi-traydot" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
