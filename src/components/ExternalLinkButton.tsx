import { type ComponentPropsWithoutRef } from "react"

export function ExperienceLink({
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a target="_blank" className="print:hidden" {...props}>
      {children}
    </a>
  )
}
