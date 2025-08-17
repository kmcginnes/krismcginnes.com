import type { ComponentPropsWithRef, PropsWithChildren } from "react"

type ExperienceBoxProps = {
  company: string
  date: string
  jobTitle: string
}

export function ExperienceBox({
  company,
  date,
  jobTitle,
  children,
}: PropsWithChildren<ExperienceBoxProps>) {
  return (
    <article className="h-full space-y-3 print:break-inside-avoid print:space-y-2">
      <ExperienceHeader>
        <ExperienceTitle>{company}</ExperienceTitle>
        <div className="text-muted block text-sm">
          <ExperienceDate>{date}</ExperienceDate>
          <span>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
          <ExperienceJobTitle>{jobTitle}</ExperienceJobTitle>
        </div>
      </ExperienceHeader>
      <ExperienceContent>{children}</ExperienceContent>
    </article>
  )
}

export function ExperienceHeader(props: PropsWithChildren) {
  return <header className="space-y-1">{props.children}</header>
}

export function ExperienceTitle(props: PropsWithChildren) {
  return <h3>{props.children}</h3>
}

export function ExperienceDate(props: ComponentPropsWithRef<"span">) {
  return <span {...props} />
}

export function ExperienceContent(props: PropsWithChildren) {
  return <div className="space-y-4">{props.children}</div>
}

export function ExperienceJobTitle({
  ...props
}: ComponentPropsWithRef<"span">) {
  return <span {...props} />
}
