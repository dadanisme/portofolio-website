import { ImageResponse } from "next/og";
import { hero } from "@/content/homepage";

export const alt = "Muhammad Ramdan — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load font from ${url}`);
  return res.arrayBuffer();
}

// Raw TTFs avoid Satori's WOFF2 limitations.
const FONT_URLS = {
  instrumentSerifItalic:
    "https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentserif/InstrumentSerif-Italic.ttf",
  geistMono:
    "https://raw.githubusercontent.com/vercel/geist-font/main/fonts/GeistMono/ttf/GeistMono-Regular.ttf",
} as const;

const PAPER = "#f2ede0";
const INK = "#211d17";
const OXBLOOD = "#9e1c14";
const MUTED = "#5a5148";
const RULE = "#211d17";

export default async function OpengraphImage() {
  const [first, ...rest] = hero.name.split(" ");
  const last = rest.join(" ");

  const [serifItalic, mono] = await Promise.all([
    loadFont(FONT_URLS.instrumentSerifItalic),
    loadFont(FONT_URLS.geistMono),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          color: INK,
          padding: "64px 80px 56px",
          fontFamily: "Geist Mono",
          position: "relative",
        }}
      >
        {/* Top rail */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="26" height="26" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill={OXBLOOD} />
              <path d="M16 8 L25 24 H7 Z" fill={PAPER} />
            </svg>
            <span>Portfolio · 2026</span>
          </div>
          <span style={{ color: MUTED }}>Bandung · IDN</span>
        </div>

        {/* Rule */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 1,
            background: RULE,
            marginTop: 28,
          }}
        />

        {/* Spacer above name */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Name — vertically centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            fontSize: 190,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: INK,
          }}
        >
          <span style={{ display: "flex" }}>{first}</span>
          <span
            style={{
              display: "flex",
              paddingLeft: 80,
              marginTop: 8,
            }}
          >
            <span style={{ color: OXBLOOD }}>/</span>
            <span>{last}</span>
            <span style={{ color: OXBLOOD }}>/</span>
          </span>
        </div>

        {/* Spacer below name */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Rule */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 1,
            background: RULE,
          }}
        />

        {/* Bottom meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 22,
            fontSize: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ color: INK }}>{hero.title}</span>
            <span style={{ color: OXBLOOD }}>·</span>
            <span style={{ color: MUTED }}>Practicing since 2017</span>
          </div>
          <span style={{ color: MUTED }}>muhammadramdan.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifItalic,
          style: "italic",
          weight: 400,
        },
        {
          name: "Geist Mono",
          data: mono,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
