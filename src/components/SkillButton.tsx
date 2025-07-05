import { type PropsWithChildren } from "react"
import { type IconProps } from "."
import { cn } from "~/lib/utils"

type SkillButtonProps = {
  icon: React.ComponentType<IconProps>
  label: string
} & React.ComponentPropsWithRef<"div">

export function SkillButton({
  className,
  children,
  icon: Icon,
  label,
  ...props
}: PropsWithChildren<SkillButtonProps>) {
  return (
    <div
      className={cn("flex flex-row items-center gap-4", className)}
      {...props}
    >
      <div className="bg-accent/8 flex size-[2lh] shrink-0 items-center justify-center self-start rounded-2xl p-3">
        <Icon className="text-accent size-full" />
      </div>
      <p className="leading-6.5">
        <strong>{label}</strong>
        <span> &mdash; </span>
        <span className="text-body">{children}</span>
      </p>
    </div>
  )
}
