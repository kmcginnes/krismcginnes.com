import Image from "next/image"
import { type PropsWithChildren } from "react"
import {
  EmailIcon,
  FigmaIcon,
  GitHubIcon,
  IconProps,
  InstagramIcon,
  InternetIcon,
  LinkedInIcon,
  MastodonIcon,
  NextIcon,
  ReactIcon,
  RemixIcon,
  SwiftIcon,
  TailwindIcon,
  VSCodeIcon,
  XcodeIcon,
} from "./icons"

export default function HomePage() {
  return (
    <main className="py-page flex flex-col gap-12 print:gap-8 print:py-0">
      <section>
        <div className="flex items-center gap-4 print:items-start">
          <Image
            src="/profile.jpg"
            alt="Profile"
            className="h-32 w-32 flex-shrink-0 rounded-full border-2 border-white print:border-0"
            height="256"
            width="256"
          />
          <div className="space-y-4 font-heading">
            <div>
              <h1 className="text-5xl font-black tracking-wide">
                Kris McGinnes
              </h1>
              <h2 className="text-secondary text-lg font-medium">
                Engineer & Designer
              </h2>
            </div>
            <ul className="text-muted text-body flex flex-wrap gap-4 print:gap-2">
              <li>
                <FindMeLink
                  icon={EmailIcon}
                  href="mailto:kris@mcginnes.io"
                  aria-label="Email"
                >
                  kris@mcginnes.io
                </FindMeLink>
              </li>
              <li>
                <FindMeLink
                  icon={MastodonIcon}
                  href="https://mastodon.social/@kmcginnes"
                  aria-label="Mastodon"
                >
                  mastodon.social/@kmcginnes
                </FindMeLink>
              </li>
              <li>
                <FindMeLink
                  icon={InstagramIcon}
                  href="https://www.instagram.com/kmcginnes"
                  aria-label="Instagram"
                >
                  instagram.com/kmcginnes
                </FindMeLink>
              </li>
              <li>
                <FindMeLink
                  icon={GitHubIcon}
                  href="https://github.com/kmcginnes"
                  aria-label="GitHub"
                >
                  github.com/kmcginnes
                </FindMeLink>
              </li>
              <li>
                <FindMeLink
                  icon={LinkedInIcon}
                  href="https://www.linkedin.com/in/krismcginnes/"
                  aria-label="LinkedIn"
                >
                  linkedin.com/in/krismcginnes
                </FindMeLink>
              </li>
              <li className="hidden print:inline">
                <FindMeLink
                  icon={InternetIcon}
                  href="http://krismcginnes.com"
                  aria-label="Website"
                >
                  krismcginnes.com
                </FindMeLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="hidden flex-col gap-4 md:flex-row md:items-start print:hidden">
        <div className="flex grow items-center md:order-2 md:justify-center">
          <span className="text-tertiary font-mono text-9xl">&lt;/&gt;</span>
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-wide md:text-5xl">
          Think. Design. <br />
          Develop. Deploy. <br />
          <span className="text-secondary">Repeat.</span>
        </h1>
      </section>
      <section className="prose-default prose prose-lg">
        <p>
          Hi, my name is Kris and I got in to coding because I wanted to make
          everyone's computing world <strong>better</strong>. The status quo
          options were simply not good enough, and I, arrogantly, thought I
          could do better.
        </p>
        <p>
          It turns out building software is hard. To do it well takes{" "}
          <strong>focus</strong>, <strong>dedication</strong>, and{" "}
          <strong>support</strong>. I have been lucky enough to work with many
          teams who share the vision that software can be <strong>great</strong>
          .
        </p>
      </section>
      <section className="flex flex-col gap-8 print:gap-4">
        <h1 className="flex text-3xl font-black tracking-wider">Skills</h1>

        <section className="space-y-4">
          <h2 className="section-header">Tech & Frameworks</h2>

          <ul className="flex flex-row flex-wrap items-center gap-2 print:gap-3">
            <li>
              <SkillButton icon={ReactIcon} href="https://react.dev/">
                React
              </SkillButton>
            </li>
            <li>
              <SkillButton icon={NextIcon} href="https://nextjs.org/">
                Next.js
              </SkillButton>
            </li>
            <li>
              <SkillButton icon={RemixIcon} href="https://remix.run/">
                Remix.js
              </SkillButton>
            </li>
            <li>
              <SkillButton icon={TailwindIcon} href="https://tailwindcss.com/">
                TailwindCSS
              </SkillButton>
            </li>
            <li>
              <SkillButton
                icon={SwiftIcon}
                href="https://developer.apple.com/xcode/swiftui/"
              >
                SwiftUI
              </SkillButton>
            </li>
            <li>
              <div className="text-muted text-heading tracking-wider print:hidden">
                &amp; many more
              </div>
            </li>
          </ul>

          <h2 className="section-header">Applications & Tools</h2>

          <ul className="flex flex-row flex-wrap items-center gap-2 print:gap-3">
            <li>
              <SkillButton
                icon={VSCodeIcon}
                href="https://code.visualstudio.com/"
              >
                VS Code
              </SkillButton>
            </li>
            <li>
              <SkillButton icon={FigmaIcon} href="https://www.figma.com/">
                Figma
              </SkillButton>
            </li>
            <li>
              <SkillButton
                icon={XcodeIcon}
                href="https://developer.apple.com/xcode/"
              >
                XCode
              </SkillButton>
            </li>
            <li>
              <SkillButton icon={GitHubIcon} href="https://github.com/">
                GitHub
              </SkillButton>
            </li>
            <li>
              <div className="text-muted text-heading tracking-wider print:hidden">
                &amp; many more
              </div>
            </li>
          </ul>
        </section>
      </section>

      <section className="flex flex-col gap-8 print:gap-4">
        <h1 className="flex text-3xl font-black tracking-wider">Work</h1>

        <section className="space-y-4">
          <h2 className="section-header">
            Principal Consultant with Improving
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="Influxer" date="2023">
                <h4>Technical Lead</h4>
                <p>
                  Led the team rewriting the existing Shopify website with an
                  emphasis on design and performance. The project was completed
                  with a minimal team ahead of schedule.
                </p>
                <ExternalLinkButton href="http://www.influxermerch.com">
                  Visit Influxer Merch
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Spend Life Wisely" date="2022 - 2023">
                <h4>Lead Mobile Developer</h4>
                <p>
                  Developed the SwiftUI mobile app for the social networking app
                  Our Community. I moved the app to a simpler architecture and
                  rebuilt the components to be more flexible and consistent. I
                  also mentored juniors on the frontend team, and provided
                  technical and problem solving assistance for the entire team.
                </p>
                <ExternalLinkButton href="https://apps.apple.com/us/app/our-community-local-events/id1575928251">
                  Our Community on the App Store
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="section-header">Senior Consultant with Improving</h2>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="OxeFit" date="2021 - 2022">
                <h4>Mobile App Developer</h4>
                <p>
                  Implemented custom and complex UI animations and interactions
                  in a React Native video platform app. Unfortunately, it was
                  never released due to the complexities of licensing content.
                </p>
                <ExternalLinkButton href="https://www.oxefit.com/">
                  Visit OxeFit
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox
                company="Federation of State Medical Boards (FSMB)"
                date="2020 - 2021"
              >
                <h4>Front End Developer</h4>
                <p>
                  Implemented new features and polished existing UI in a .NET
                  web app designed to connect nurses and doctors to hospitals in
                  need.
                </p>
                <ExternalLinkButton href="https://www.providerbridge.org/">
                  Visit ProviderBridge
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox
                company="Toyota of North America"
                date="2019 - 2020"
              >
                <h4>Developer & Designer</h4>
                <p>
                  Worked with a large team of UX designers on high fidelity
                  prototypes using the iPad and SwiftUI.
                </p>
                <ExternalLinkButton href="https://pressroom.lexus.com/the-all-new-lexus-interface-multimedia-system-is-here-and-it-is-a-game-changer/">
                  Lexus Press Release
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Eagle Metal" date="2018 - 2019">
                <h4>Developer</h4>
                <p>
                  Polished the UI and rewrote the data layer for their roof
                  truss planning & ordering app.
                </p>
                <ExternalLinkButton href="https://eaglemetal.com/">
                  Visit Eagle Metal
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="WatchGuard Video" date="2014 - 2018">
                <h4>Developer</h4>
                <p>
                  Worked on various projects that interact directly with USB
                  devices, manipulate video files, and reliably sync large files
                  across multiple physical boundaries.
                </p>
                <ExternalLinkButton href="https://www.motorolasolutions.com/en_us/video-security-access-control/videomanager-el.html">
                  Visit Evidence Library
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Thompson Reuters" date="2013 - 2014">
                <h4>Developer</h4>
                <p>
                  Audited security practices across organization, enhanced tax
                  form management software dealing directly with PDF files
                  within the WPF app.
                </p>
                <ExternalLinkButton href="https://tax.thomsonreuters.com/en">
                  Visit Tax & Accounting Software
                </ExternalLinkButton>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="section-header">Software Consultant with Excolo</h2>

          <ExperienceBox company="SpaceX" date="2013">
            <h4>Developer</h4>
            <p>
              Hired and managed team that built out a data center product
              procurement website using ASP.net MVC.
            </p>
          </ExperienceBox>
        </section>

        <section className="space-y-4">
          <h2 className="section-header">
            Software Consultant with CH Reynolds
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="Cisco Systems" date="2012 - 2013">
                <h4>Team Lead</h4>
                <p>
                  Hired and managed team that built out a data center product
                  procurement website using ASP.net MVC.
                </p>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Cisco Systems" date="2010 - 2012">
                <h4>Developer</h4>
                <p>
                  Enhanced the existing Silverlight app that would visually
                  manage data center resources with a drag and drop UI.
                </p>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="section-header">Fulltime</h2>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="Allegro Development" date="2007 - 2010">
                <h4>Software Developer</h4>
                <p>
                  Rewrote and enhanced a complex forecasting module written in
                  C# which was part of a very large oil & gas management suite.
                </p>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="FedEx Kinkos" date="2007">
                <h4>Developer</h4>
                <p>
                  Worked with a team to transform large data sets using visual
                  tools.
                </p>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="section-header">Education</h2>

          <ExperienceBox
            company="University of Texas at Dallas"
            date="2002 - 2007"
          >
            <h4>B.S. Computer Science</h4>
            <p>
              <strong>Notable Classes:</strong> Object Oriented Analysis &
              Design, Computer Graphics, Data Structures
            </p>
          </ExperienceBox>
        </section>
      </section>
    </main>
  )
}

type SkillButtonProps = {
  icon: React.ComponentType<IconProps>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function SkillButton({
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

type FindMeLinkProps = {
  icon: React.ComponentType<IconProps>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function FindMeLink({
  children,
  icon: Icon,
  ...props
}: PropsWithChildren<FindMeLinkProps>) {
  return (
    <a
      href="https://github.com/kmcginnes"
      target="_blank"
      className="text-muted hover:text-body flex items-center gap-1 transition-colors"
      {...props}
    >
      <Icon className="h-5 w-5 print:h-4 print:w-4" />
      <span className="hidden print:block">{children}</span>
    </a>
  )
}

type ExternalLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

function ExternalLinkButton({
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

type ExperienceBoxProps = {
  company: string
  date: string
}

function ExperienceBox({
  company,
  date,
  children,
}: PropsWithChildren<ExperienceBoxProps>) {
  return (
    <article className="card flex h-full flex-col gap-4 print:gap-2">
      <header className="flex items-end justify-between gap-2 space-y-1">
        <h1 className="text-xl font-extrabold tracking-wide print:text-base">
          {company}
        </h1>
        <h2 className="text-secondary flex-shrink-0 font-mono print:font-heading">
          {date}
        </h2>
      </header>
      <hr className="border-green-500 print:hidden" />
      <div className="prose-default prose flex h-full max-w-none flex-col">
        {children}
      </div>
    </article>
  )
}
