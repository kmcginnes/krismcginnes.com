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
      target="_blank"
      className="hover:text-highlight text-body flex items-center gap-1 transition-all hover:scale-120"
      {...props}
    >
      <Icon className="size-6 print:size-4" />
      <div className="hidden print:block">{children}</div>
    </a>
  )
}
