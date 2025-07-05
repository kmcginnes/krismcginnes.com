import {
  ArrowUpRightIcon,
  ChevronsRightIcon,
  ExternalLinkIcon,
} from "lucide-react"
import { type ComponentPropsWithoutRef } from "react"

export function ExperienceLink({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <footer className="flex grow items-end print:hidden">
      <a
        target="_blank"
        className="group inline-flex items-center gap-2 underline-offset-8"
        {...props}
      >
        {children}
        <ExternalLinkIcon className="text-highlight size-4 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      </a>
    </footer>
  )
}
