import "~/styles/globals.css"
import { Bitter, Nunito_Sans } from "next/font/google"
import Footer from "./footer"

const serif = Bitter({
  subsets: ["latin"],
  variable: "--font-serif",
})

const sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Kris McGinnes Portfolio",
  description:
    "I most enjoy building software at the intersection of design and engineering - things that look good but are also built well under the hood.",
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
      </body>
    </html>
  )
}
