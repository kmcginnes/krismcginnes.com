export default function Footer() {
  return (
    <footer className="text-muted space-y-2 py-8 text-sm md:py-12 print:hidden print:py-0 print:pt-8">
      <p>&copy; {new Date().getFullYear()} Kris McGinnes</p>
      <p>
        Built using <a href="https://nextjs.org/">Next.js</a> and deployed on{" "}
        <a href="https://vercel.com/home">Vercel</a>. Fonts used are{" "}
        <a href="https://fonts.google.com/specimen/Inter">Inter</a>. Icons are
        sourced from <a href="https://lucide.dev/">Lucide</a> and{" "}
        <a href="https://simpleicons.org">Simple Icons</a>.
      </p>
    </footer>
  )
}
