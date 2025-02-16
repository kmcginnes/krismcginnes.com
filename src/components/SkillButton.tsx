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
    <a
      target="_blank"
      className="print:text-body flex items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-center font-sans! font-medium tracking-wider text-balance text-gray-950 no-underline transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 print:gap-1 print:bg-transparent print:p-0"
      {...props}
    >
      <Icon className="h-5 w-5 print:h-4 print:w-4" />
      <span>{children}</span>
    </a>
  )
}
