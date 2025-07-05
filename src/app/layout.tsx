import "~/styles/globals.css"
import { Inter, Archivo, Funnel_Sans } from "next/font/google"
import Footer from "./footer"
import { env } from "~/env"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const sans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const metadata = {
  title: "Kris McGinnes Portfolio",
  description:
    "I most enjoy building software at the intersection of design and engineering - things that look good but are also built well under the hood.",
  metadataBase: env.SITE_URL ? new URL(env.SITE_URL) : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-default accent-accent selection:bg-selection text-body content-grid min-h-screen font-sans text-pretty antialiased selection:text-white print:bg-transparent ${sans.variable}`}
      >
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
