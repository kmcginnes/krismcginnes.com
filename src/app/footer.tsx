export default function Footer() {
  return (
    <footer className="text-muted prose prose-sm max-w-none py-4 print:hidden">
      <p>
        Built using <a href="https://nextjs.org/">Next.js</a> and deployed on{" "}
        <a href="https://vercel.com/home">Vercel</a>. Fonts used are{" "}
        <a href="https://fonts.google.com/specimen/Nunito+Sans">Nonito Sans</a>{" "}
        and{" "}
        <a href="https://fonts.google.com/specimen/Bitter?query=bitter">
          Bitter
        </a>
        .
      </p>
      <p>&copy; {new Date().getFullYear()} Kris McGinnes</p>
    </footer>
  )
}
