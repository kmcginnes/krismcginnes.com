import "~/styles/globals.css"
import { Rubik, Raleway, Nunito_Sans, Inter, Open_Sans } from "next/font/google"
import Footer from "./footer"
import { env } from "~/env"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import React from "react"
import { HeroPattern } from "~/components"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        className={`bg-default accent-accent selection:bg-selection text-body content-grid relative min-h-screen font-sans text-pretty antialiased selection:text-white print:bg-transparent ${openSans.variable}`}
      >
        <HeroPattern className="text-accent bg-accent-muted absolute inset-x-0 top-0 -z-10 h-96 mask-b-from-20% mask-b-to-85% opacity-20 dark:block dark:bg-transparent print:hidden" />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
