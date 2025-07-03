import "~/styles/globals.css"
import { Inter } from "next/font/google"
import Footer from "./footer"
import { env } from "~/env"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const sans = Inter({
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
        className={`bg-default accent-accent selection:bg-selection text-body min-h-screen max-w-3xl px-4 font-sans antialiased selection:text-white sm:px-8 md:mx-auto md:px-12 print:bg-transparent ${sans.variable}`}
      >
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
