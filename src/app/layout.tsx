import "~/styles/globals.css"
import { Rubik, Raleway, Nunito_Sans, Inter, Open_Sans } from "next/font/google"
import Footer from "./footer"
import { env } from "~/env"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import React from "react"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const nunitoSans = Nunito_Sans({
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
        className={`bg-default accent-accent selection:bg-selection text-body content-grid min-h-screen font-sans text-pretty antialiased selection:text-white print:bg-transparent ${openSans.variable}`}
      >
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
