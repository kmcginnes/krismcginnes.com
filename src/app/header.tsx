import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center py-4 md:py-8 print:flex-col print:items-start">
      <nav
        className="flex grow flex-wrap items-center gap-4 font-heading text-xl font-medium tracking-wider print:hidden"
        role="nav"
      >
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <a href="mailto:kris@mcginnes.io">Contact</a>
      </nav>
      <div className="flex items-center gap-4 print:flex-row-reverse">
        <div className="hidden font-mono sm:block print:block print:font-heading">
          <span className="text-lg print:text-4xl print:font-black">
            Kris McGinnes
          </span>
          <h2 className="hidden text-lg print:block">
            kris@mcginnes.io &middot; modestreflections.com
          </h2>
        </div>
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-white md:h-12 md:w-12 print:h-24 print:w-24 print:border-0"
          height="48"
          width="48"
        />
      </div>
    </header>
  )
}
