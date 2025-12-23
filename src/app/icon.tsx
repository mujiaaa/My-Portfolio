import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "transparent",
        }}
      >
        {/* single child only (avoids the “more than one child node” warning) */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #ff3b7a, #ffb84a)",
            boxShadow: "0 10px 28px rgba(255, 90, 140, 0.30)",
            fontSize: 34,
            lineHeight: 1,
          }}
        >
          🍓
        </div>
      </div>
    ),
    size
  );
}
