import { type ComponentPropsWithRef, type PropsWithChildren } from "react"
import { cn } from "~/lib/utils"

type ExperienceBoxProps = {
  company: string
  date: string
}

export function ExperienceBox({
  company,
  date,
  children,
}: PropsWithChildren<ExperienceBoxProps>) {
  return (
    <article className="bg-secondary h-full space-y-4 rounded-xl p-6 shadow-xs dark:shadow-none print:break-inside-avoid print:gap-2 print:bg-transparent print:p-0 print:shadow-none">
      <ExperienceHeader>
        <ExperienceTitle>{company}</ExperienceTitle>
        <ExperienceDate>{date}</ExperienceDate>
      </ExperienceHeader>
      <ExperienceContent>{children}</ExperienceContent>
    </article>
  )
}

export function ExperienceHeader(props: PropsWithChildren) {
  return (
    <header className="flex items-end justify-between gap-2 border-b border-green-500 pb-2 print:border-none print:pb-0">
      {props.children}
    </header>
  )
}

export function ExperienceTitle(props: PropsWithChildren) {
  return (
    <h1 className="text-base font-semibold print:text-base">
      {props.children}
    </h1>
  )
}

export function ExperienceDate(props: PropsWithChildren) {
  return (
    <h2 className="text-secondary shrink-0 text-base font-normal text-balance print:text-lg print:font-bold print:text-black">
      {props.children}
    </h2>
  )
}

export function ExperienceContent(props: PropsWithChildren) {
  return <div className="typography">{props.children}</div>
}

export function ExperienceJobTitle({
  className,
  ...props
}: ComponentPropsWithRef<"h4">) {
  return <div className={cn("text-body font-bold", className)} {...props}></div>
}
