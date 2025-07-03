import { type PropsWithChildren } from "react"
import { type IconProps } from "."
import { cn } from "~/lib/utils"

type SkillButtonProps = {
  icon: React.ComponentType<IconProps>
  href?: React.ComponentProps<"a">["href"]
  label: string
} & React.ComponentPropsWithRef<"div">

export function SkillButton({
  className,
  children,
  href,
  icon: Icon,
  label,
  ...props
}: PropsWithChildren<SkillButtonProps>) {
  return (
    <div
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <div className="flex size-[2lh] shrink-0 items-center justify-center self-start p-2.5">
        <Icon className="text-accent print:text-body size-full" />
      </div>
      <p className="print:text-body text-lg leading-6.5">
        <a href={href} className="text-emphasis font-semibold">
          {label}
        </a>
        <span> &mdash; </span>
        <span className="text-body">{children}</span>
      </p>
    </div>
  )
}
