import { ComponentProps } from "react"

export default function Footer() {
  return (
    <footer className="text-muted flex max-w-xl flex-col gap-4 text-balance py-8 text-sm print:hidden">
      <p>
        Built using <Link href="https://nextjs.org/">Next.js</Link> and deployed
        on <Link href="https://vercel.com/home">Vercel</Link>. Fonts used are{" "}
        <Link href="https://fonts.google.com/specimen/Nunito+Sans">
          Nonito Sans
        </Link>{" "}
        and{" "}
        <Link href="https://fonts.google.com/specimen/Bitter?query=bitter">
          Bitter
        </Link>
        . Icons are sourced from{" "}
        <Link href="https://fontawesome.com">Font Awesome</Link> and{" "}
        <Link href="https://simpleicons.org">Simple Icons</Link>.
      </p>
      <p>&copy; {new Date().getFullYear()} Kris McGinnes</p>
    </footer>
  )
}

type LinkProps = ComponentProps<"a">

function Link({ ...props }: LinkProps) {
  return (
    <a
      className="text-emphasis font-medium underline underline-offset-2"
      {...props}
    ></a>
  )
}
