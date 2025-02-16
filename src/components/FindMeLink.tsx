import { type PropsWithChildren } from "react"
import { type IconProps } from "."

type FindMeLinkProps = {
  icon: React.ComponentType<IconProps>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function FindMeLink({
  children,
  icon: Icon,
  ...props
}: PropsWithChildren<FindMeLinkProps>) {
  return (
    <a
      href="https://github.com/kmcginnes"
      target="_blank"
      className="text-muted hover:text-body print:text-body flex items-center gap-1 transition-colors"
      {...props}
    >
      <Icon className="h-5 w-5 print:h-4 print:w-4" />
      <span className="hidden print:block">{children}</span>
    </a>
  )
}
