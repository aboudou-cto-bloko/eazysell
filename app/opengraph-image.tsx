import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "EazySell — L'IA qui fait grandir les entreprises béninoises";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "0.12em",
            }}
          >
            EAZYSELL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            L&apos;intelligence artificielle
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#2f6bff",
            }}
          >
            pour les entreprises béninoises.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.6)" }}>
            Google Business · Chatbots IA · CRM · Agents métiers
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.45)" }}>Cotonou, Bénin</div>
        </div>
      </div>
    ),
    size,
  );
}
