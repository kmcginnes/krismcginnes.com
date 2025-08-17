import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Kris McGinnes Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  // Font
  const nunitoMedium = fetch(
    new URL("./NunitoSans_10pt-Medium.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer())

  const nunitoBlack = fetch(
    new URL("./NunitoSans_10pt-Black.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background: "#18181b",
        color: "#fafafa",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ color: "#fafafa", fontWeight: 900, fontSize: 128 }}>
        Kris McGinnes
      </div>
      <div style={{ color: "#bbf7d0", fontSize: 72, fontWeight: 500 }}>
        Engineer & Designer
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "NunitoSans",
          data: await nunitoMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "NunitoSans",
          data: await nunitoBlack,
          style: "normal",
          weight: 900,
        },
      ],
    },
  )
}
