import "~/styles/globals.css"
import {
  Bitter,
  Noto_Sans_Mono,
  Nunito_Sans,
  Open_Sans,
} from "next/font/google"
import Header from "./header"
import Footer from "./footer"

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const serif = Bitter({
  subsets: ["latin"],
  variable: "--font-serif",
})

const mono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const heading = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata = {
  title: "Kris McGinnes",
  description: "Hi, I'm an engineer by trade and a designer by heart.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`text-body min-h-screen px-4 font-sans sm:px-8 md:mx-auto md:max-w-5xl md:px-12 ${sans.variable} ${serif.variable} ${mono.variable} ${heading.variable}`}
      >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
