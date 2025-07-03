import { ChevronsRightIcon } from "lucide-react"
import { type ComponentPropsWithoutRef } from "react"

export function ExperienceLink({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <footer className="flex grow items-end print:hidden">
      <a
        target="_blank"
        className="text-emphasis decoration-accent [&_svg]:text-secondary inline-flex items-center gap-1 underline underline-offset-8 hover:no-underline [&_svg]:size-3"
        {...props}
      >
        {children}
        <ChevronsRightIcon />
      </a>
    </footer>
  )
}
