import Image from "next/image"
import profilePic from "./../../public/profile.jpg"
import {
  EmailIcon,
  ExperienceBox,
  ExperienceJobTitle,
  ExperienceLink,
  FigmaIcon,
  FindMeLink,
  GitHubIcon,
  InstagramIcon,
  InternetIcon,
  LinkedInIcon,
  MastodonIcon,
  NextIcon,
  ReactIcon,
  RemixIcon,
  SkillButton,
  SwiftIcon,
  TailwindIcon,
  VSCodeIcon,
  XcodeIcon,
} from "~/components"

export default function HomePage() {
  return (
    <main className="py-page space-y-6 print:gap-8 print:py-0">
      <section>
        <div className="flex items-center gap-6">
          <Image
            src={profilePic}
            alt="Profile"
            className="hidden size-24 shrink-0 rounded-xl border-0 border-white"
            priority
          />
          <div>
            <h1>Kris McGinnes</h1>
            <h3>Engineer & Designer</h3>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="typography">
          <p>
            Since the start of my career in 2007, I have had the privilege to
            work with large and small companies all aiming to{" "}
            <strong>enrich people’s lives</strong> with thoughtfully crafted
            products.
          </p>
          <p>
            I most enjoy building software at the intersection of{" "}
            <strong>design</strong> and <strong>engineering</strong> - things
            that look good but are also built well under the hood.
          </p>
          <p>
            When I’m not at the computer I’m usually brewing coffee, watching
            movies, hanging out with my wife and dog, or out walking around the
            city.
          </p>
        </div>
        <div className="space-y-4">
          <h3>Get in Touch</h3>
          <ul className="text-muted flex flex-wrap gap-4 print:gap-2">
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
                icon={LinkedInIcon}
                href="https://www.linkedin.com/in/krismcginnes/"
                aria-label="LinkedIn"
              >
                linkedin.com/in/krismcginnes
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
      </section>
      <section className="space-y-6 print:space-y-4">
        <h2>Skills</h2>

        <section className="space-y-4">
          <h3>Tech & Frameworks</h3>

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
              <div className="text-muted text-heading print:hidden">
                &amp; many more
              </div>
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h3>Applications & Tools</h3>

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
              <div className="text-muted text-heading print:hidden">
                &amp; many more
              </div>
            </li>
          </ul>
        </section>
      </section>

      <section className="space-y-6 print:space-y-4">
        <h2>Experience</h2>

        <section className="space-y-4">
          <h3>Principal Consultant with Improving</h3>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="Influxer" date="2023">
                <ExperienceJobTitle>Technical Lead</ExperienceJobTitle>
                <p>
                  Led the team rewriting the existing Shopify website with an
                  emphasis on design and performance. The project was completed
                  with a minimal team ahead of schedule.
                </p>
                <ExperienceLink href="http://www.influxermerch.com">
                  Visit Influxer Merch
                </ExperienceLink>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Spend Life Wisely" date="2022 - 2023">
                <ExperienceJobTitle>Lead Mobile Developer</ExperienceJobTitle>
                <p>
                  Developed the SwiftUI mobile app for the social networking app
                  Our Community. I moved the app to a simpler architecture and
                  rebuilt the components to be more flexible and consistent. I
                  also mentored juniors on the frontend team, and provided
                  technical and problem solving assistance for the entire team.
                </p>
                <ExperienceLink href="https://apps.apple.com/us/app/our-community-local-events/id1575928251">
                  Our Community on the App Store
                </ExperienceLink>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3>Senior Consultant with Improving</h3>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="OxeFit" date="2021 - 2022">
                <ExperienceJobTitle>Mobile App Developer</ExperienceJobTitle>
                <p>
                  Implemented custom and complex UI animations and interactions
                  in a React Native video platform app. Unfortunately, it was
                  never released due to the complexities of licensing content.
                </p>
                <ExperienceLink href="https://www.oxefit.com/">
                  Visit OxeFit
                </ExperienceLink>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox
                company="Federation of State Medical Boards (FSMB)"
                date="2020 - 2021"
              >
                <ExperienceJobTitle>Front End Developer</ExperienceJobTitle>
                <p>
                  Implemented new features and polished existing UI in a .NET
                  web app designed to connect nurses and doctors to hospitals in
                  need.
                </p>
                <ExperienceLink href="https://www.providerbridge.org/">
                  Visit ProviderBridge
                </ExperienceLink>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox
                company="Toyota of North America"
                date="2019 - 2020"
              >
                <ExperienceJobTitle>Developer & Designer</ExperienceJobTitle>
                <p>
                  Worked with a large team of UX designers on high fidelity
                  prototypes using the iPad and SwiftUI.
                </p>
                <ExperienceLink href="https://pressroom.lexus.com/the-all-new-lexus-interface-multimedia-system-is-here-and-it-is-a-game-changer/">
                  Lexus Press Release
                </ExperienceLink>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Eagle Metal" date="2018 - 2019">
                <ExperienceJobTitle>Developer</ExperienceJobTitle>
                <p>
                  Polished the UI and rewrote the data layer for their roof
                  truss planning & ordering app.
                </p>
                <ExperienceLink href="https://eaglemetal.com/">
                  Visit Eagle Metal
                </ExperienceLink>
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
                <ExperienceLink href="https://www.motorolasolutions.com/en_us/video-security-access-control/videomanager-el.html">
                  Visit Evidence Library
                </ExperienceLink>
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
                <ExperienceLink href="https://tax.thomsonreuters.com/en">
                  Visit Tax & Accounting Software
                </ExperienceLink>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3>Software Consultant with Excolo</h3>

          <ExperienceBox company="SpaceX" date="2013">
            <ExperienceJobTitle>Developer</ExperienceJobTitle>
            <p>
              Hired and managed team that built out a data center product
              procurement website using ASP.net MVC.
            </p>
          </ExperienceBox>
        </section>

        <section className="space-y-4">
          <h3>Software Consultant with CH Reynolds</h3>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="Cisco Systems" date="2012 - 2013">
                <ExperienceJobTitle>Team Lead</ExperienceJobTitle>
                <p>
                  Hired and managed team that built out a data center product
                  procurement website using ASP.net MVC.
                </p>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="Cisco Systems" date="2010 - 2012">
                <ExperienceJobTitle>Developer</ExperienceJobTitle>
                <p>
                  Enhanced the existing Silverlight app that would visually
                  manage data center resources with a drag and drop UI.
                </p>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3>Fulltime</h3>

          <ul className="grid gap-4 md:grid-cols-2 print:grid-cols-1">
            <li>
              <ExperienceBox company="Allegro Development" date="2007 - 2010">
                <ExperienceJobTitle>Software Developer</ExperienceJobTitle>
                <p>
                  Rewrote and enhanced a complex forecasting module written in
                  C# which was part of a very large oil & gas management suite.
                </p>
              </ExperienceBox>
            </li>
            <li>
              <ExperienceBox company="FedEx Kinkos" date="2007">
                <ExperienceJobTitle>Developer</ExperienceJobTitle>
                <p>
                  Worked with a team to transform large data sets using visual
                  tools.
                </p>
              </ExperienceBox>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3>Education</h3>

          <ExperienceBox
            company="University of Texas at Dallas"
            date="2002 - 2007"
          >
            <ExperienceJobTitle>B.S. Computer Science</ExperienceJobTitle>
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
