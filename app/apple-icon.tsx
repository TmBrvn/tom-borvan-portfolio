import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #2563eb 0%, #f97316 100%)",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            letterSpacing: -4,
          }}
        >
          TB
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
