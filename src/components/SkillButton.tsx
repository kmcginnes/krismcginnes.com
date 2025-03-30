import { type PropsWithChildren } from "react"
import { type IconProps } from "."
import { cn } from "~/lib/utils"

type SkillButtonProps = {
  icon: React.ComponentType<IconProps>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SkillButton({
  children,
  icon: Icon,
  ...props
}: PropsWithChildren<SkillButtonProps>) {
  return (
    <a
      target="_blank"
      className={cn(
        "print:text-body group bg-button-secondary hover:bg-button-secondary-hover text-button-secondary relative flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-center font-sans! font-medium text-balance no-underline transition-colors print:gap-1 print:bg-transparent print:p-0",
      )}
      {...props}
    >
      <Icon className="text-secondary h-5 w-5 print:h-4 print:w-4" />
      <span>{children}</span>
    </a>
  )
}
