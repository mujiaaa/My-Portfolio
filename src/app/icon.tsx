import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #09090b 0%, #000000 100%)",
        }}
      >
        {/* jar */}
        <div
          style={{
            width: 20,
            height: 22,
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.06)",
            position: "relative",
            boxShadow: "0 0 14px rgba(236,72,153,0.18)",
          }}
        >
          {/* lid */}
          <div
            style={{
              position: "absolute",
              left: 3,
              top: -4,
              width: 14,
              height: 6,
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(236,72,153,0.35)",
            }}
          />
          {/* jam */}
          <div
            style={{
              position: "absolute",
              left: 3,
              bottom: 3,
              width: 14,
              height: 12,
              borderRadius: 4,
              background: "rgba(244,63,94,0.78)",
            }}
          />
          {/* label */}
          <div
            style={{
              position: "absolute",
              left: 4,
              bottom: 7,
              width: 12,
              height: 6,
              borderRadius: 4,
              background: "rgba(255,255,255,0.14)",
            }}
          />
          {/* strawberry */}
          <div
            style={{
              position: "absolute",
              left: 9,
              bottom: 8.8,
              width: 4,
              height: 4,
              borderRadius: 99,
              background: "rgba(244,63,94,0.95)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 8.3,
              bottom: 12.5,
              width: 5.4,
              height: 2.3,
              borderRadius: 99,
              background: "rgba(34,197,94,0.9)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
