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
          width: 32,
          height: 32,
          background: "linear-gradient(135deg, #2563eb 0%, #f97316 100%)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            letterSpacing: -1,
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
