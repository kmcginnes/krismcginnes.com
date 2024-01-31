export default function Footer() {
  return (
    <footer className="text-muted prose prose-sm prose-zinc py-8 dark:prose-invert print:hidden">
      <p>&copy; {new Date().getFullYear()} Kris McGinnes</p>
      <p>
        Built using <a href="https://nextjs.org/">Next.js</a> and deployed on{" "}
        <a href="https://vercel.com/home">Vercel</a>. Fonts used are{" "}
        <a href="https://fonts.google.com/specimen/Nunito+Sans">Nonito Sans</a>{" "}
        and{" "}
        <a href="https://fonts.google.com/specimen/Bitter?query=bitter">
          Bitter
        </a>
        . Icons are sources from{" "}
        <a href="https://fontawesome.com">Font Awesome</a> and{" "}
        <a href="https://simpleicons.org">Simple Icons</a>.
      </p>
    </footer>
  )
}
