import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFEFE",
          borderTop: "24px solid #35B7EA",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontFamily: "monospace",
            color: "#0e6e9e",
            letterSpacing: 4,
          }}
        >
          TATHAGATA TECHNOLOGY · AHMEDABAD
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            color: "#231F20",
            lineHeight: 1.05,
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          We build scalable technology.
        </div>
        <div style={{ fontSize: 28, color: "#5F6B76", marginTop: 24 }}>
          Web · Mobile · AI · Marketing · CartPOS · HRMS Suite
        </div>
      </div>
    ),
    { ...size }
  );
}
