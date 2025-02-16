import { type PropsWithChildren } from "react"
import { type IconProps } from "."

type SkillButtonProps = {
  icon: React.ComponentType<IconProps>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SkillButton({
  children,
  icon: Icon,
  ...props
}: PropsWithChildren<SkillButtonProps>) {
  return (
    <a target="_blank" className="button-secondary" {...props}>
      <Icon className="h-5 w-5 print:h-4 print:w-4" />
      <span>{children}</span>
    </a>
  )
}
