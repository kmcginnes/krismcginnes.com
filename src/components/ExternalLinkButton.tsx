import { Link } from "lucide-react"
import { type ComponentPropsWithoutRef } from "react"

export function ExperienceLink({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <footer className="flex grow items-end print:hidden">
      <a
        target="_blank"
        className="decoration-accent hover:text-emphasis [&_svg]:text-secondary inline-flex items-center gap-2 underline underline-offset-6 [&_svg]:size-4"
        {...props}
      >
        <Link />
        {children}
      </a>
    </footer>
  )
}
