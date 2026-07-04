import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared branded OG image layout. */
export function renderOgImage({
  title,
  kicker,
}: {
  title: string;
  kicker?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0e0a14",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(107,63,160,0.55), transparent), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(247,92,30,0.25), transparent)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          <span>AEB</span>
          <span style={{ color: "#ad87d4" }}>.media</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {kicker ? (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#ffab80",
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Growth systems for local businesses · Chicagoland
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
