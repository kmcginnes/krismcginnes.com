import { type PropsWithChildren } from "react"

type ExternalLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export function ExternalLinkButton({
  children,
  ...props
}: PropsWithChildren<ExternalLinkButtonProps>) {
  return (
    <footer className="flex grow items-end print:hidden">
      <a target="_blank" className="button max-w-fit" {...props}>
        {children}
      </a>
    </footer>
  )
}
