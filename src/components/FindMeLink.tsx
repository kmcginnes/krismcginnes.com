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
      className="hover:text-accent text-body hover:drop-shadow-accent/30 drop-shadow-accent/0 flex items-center gap-1 shadow-none drop-shadow-sm transition-all duration-200 ease-in-out hover:scale-130"
      {...props}
    >
      <Icon className="size-6 print:size-4" />
      <div className="hidden print:block">{children}</div>
    </a>
  )
}
