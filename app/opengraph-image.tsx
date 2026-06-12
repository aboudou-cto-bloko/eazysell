import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "EazySell — L'IA qui fait grandir les entreprises béninoises";

const S_PATH =
  "M0 0 C152.46 0 304.92 0 462 0 C462 26.73 462 53.46 462 81 C334.29 81 206.58 81 75 81 C75 132.48 75 183.96 75 237 C202.71 237 330.42 237 462 237 C462 341.94 462 446.88 462 555 C309.54 555 157.08 555 0 555 C0 528.6 0 502.2 0 475 C127.38 475 254.76 475 386 475 C386 422.86 386 370.72 386 317 C258.62 317 131.24 317 0 317 C0 212.39 0 107.78 0 0 Z";

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
        {/* Marque : mark S + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="53" viewBox="0 0 462 555">
            <path d={S_PATH} fill="#ffffff" />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#ffffff", letterSpacing: "0.12em" }}>
            EAZYSELL
          </div>
        </div>

        {/* Accroche */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            L&apos;intelligence artificielle
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#2f6bff" }}>
            pour les entreprises béninoises.
          </div>
        </div>

        {/* Pied : services + domaine */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 25, color: "rgba(255,255,255,0.6)" }}>
            Google Business · Chatbots IA · CRM · Agents métiers
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: "#ffffff" }}>eazysell-bj.online</div>
        </div>
      </div>
    ),
    size,
  );
}
