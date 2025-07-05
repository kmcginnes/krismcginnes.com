import React, {
  type ComponentPropsWithRef,
  type PropsWithChildren,
} from "react"
import { cn } from "~/lib/utils"

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
    <article className="h-full space-y-4 print:break-inside-avoid print:space-y-2">
      <ExperienceHeader>
        <div className="text-muted block text-sm">
          <ExperienceDate>{date}</ExperienceDate>
          <span>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
          <ExperienceJobTitle>{jobTitle}</ExperienceJobTitle>
        </div>
      </ExperienceHeader>
      <ExperienceTitle>{company}</ExperienceTitle>
      <ExperienceContent>{children}</ExperienceContent>
    </article>
  )
}

export function ExperienceHeader(props: PropsWithChildren) {
  return <header className="space-y-3">{props.children}</header>
}

export function ExperienceTitle(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl leading-4 print:text-base">{props.children}</h1>
  )
}

export function ExperienceDate(props: ComponentPropsWithRef<"span">) {
  return <span {...props} />
}

export function ExperienceContent(props: PropsWithChildren) {
  return <div className="typography">{props.children}</div>
}

export function ExperienceJobTitle({
  ...props
}: ComponentPropsWithRef<"span">) {
  return <span {...props} />
}
