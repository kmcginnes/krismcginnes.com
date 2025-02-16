import "~/styles/globals.css"
import { Bitter, Nunito_Sans } from "next/font/google"
import Footer from "./footer"
import { env } from "~/env"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const serif = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
})

const sans = Nunito_Sans({
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
        className={`text-body min-h-screen px-4 font-sans sm:px-8 md:mx-auto md:max-w-5xl md:px-12 ${serif.variable} ${sans.variable}`}
      >
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
