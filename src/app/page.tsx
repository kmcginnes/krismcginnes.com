import Image from "next/image"
import profilePic from "./../../public/profile.jpg"
import {
  ExperienceBox,
  ExperienceLink,
  FindMeLink,
  GitHubIcon,
  InstagramIcon,
  InternetIcon,
  LinkedInIcon,
  MastodonIcon,
  ReactIcon,
  SkillButton,
  SwiftIcon,
} from "~/components"
import {
  CircleEllipsisIcon,
  CloudyIcon,
  MailIcon,
  PaintbrushIcon,
  UsersIcon,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      <section className="space-y-4 pt-8 md:pt-12 print:pt-0">
        <Image
          src={profilePic}
          alt="Profile"
          className="size-24 shrink-0 rounded-full border-0 border-white opacity-100"
          priority
        />
        <h1>
          Hi, my name is{" "}
          <strong className="text-accent print:text-emphasis print:font-black">
            Kris McGinnes
          </strong>
          . I am an engineer and designer.
        </h1>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
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

        <ul className="text-muted flex flex-wrap gap-5 print:gap-3">
          <li>
            <FindMeLink
              icon={MailIcon}
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
      </section>

      <section className="space-y-6 print:space-y-4">
        <h2>Skills</h2>

        <ul className="space-y-6">
          <li>
            <SkillButton icon={UsersIcon} label="Collaboration & mentoring">
              A product is only as good as the people who build it. I&lsquo;ve
              had the chance to work on some incredible teams and I&lsquo;ve
              always enjoyed mentoring others.
            </SkillButton>
          </li>
          <li>
            <SkillButton icon={PaintbrushIcon} label="Design">
              Most recently, I&lsquo;ve been working with Tailwind and raw CSS
              with React. In former projects I&lsquo;ve created custom theme
              providers for both React and SwiftUI, designed and collaborated
              inside of Figma, used LESS and SASS, and more.
            </SkillButton>
          </li>
          <li>
            <SkillButton icon={CloudyIcon} label="Cloud Services">
              Most recently, I&lsquo;ve been working with AWS, Docker, and
              Vercel. In former projects I&lsquo;ve used Azure and local web
              servers.
            </SkillButton>
          </li>
          <li>
            <SkillButton icon={ReactIcon} label="React">
              I&lsquo;ve been using React & React Native since 2015 on both
              marketing and web app projects. This very site is built using
              React using Next.js. On former projects I&lsquo;ve used Remix (now
              React Router).
            </SkillButton>
          </li>
          <li>
            <SkillButton icon={SwiftIcon} label="SwiftUI">
              I&lsquo;ve worked with UIKit and ObjectiveC a bit as well, but
              I&lsquo;ve been using SwiftUI since the day it came out at WWDC
              2019.
            </SkillButton>
          </li>
          <li>
            <SkillButton icon={CircleEllipsisIcon} label="Many more">
              I&lsquo;ve worked with a variety of technologies, including
              TypeScript, Node.js, and more. Earlier in my career I spent much
              of my time on the backend using .Net and building out devops
              practices.
            </SkillButton>
          </li>
        </ul>
      </section>

      <section className="space-y-6 print:space-y-4">
        <h2>Experience</h2>

        <ul className="space-y-8">
          <li>
            <ExperienceBox
              company="Amazon Web Services"
              date="2024 - 2025"
              jobTitle="Principal Consultant with Improving"
            >
              <p>
                Lead contributor to the open source graph database visualization
                tool Graph Explorer.
              </p>
              <ExperienceLink href="https://github.com/aws/graph-explorer/">
                Graph Explorer on GitHub
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Influxer"
              date="2023"
              jobTitle="Principal Consultant with Improving"
            >
              <p>
                Acted as the technical lead for the team rewriting the existing
                Shopify website with a brand new design and an emphasis on
                performance using Remix and Tailwind.
              </p>
              <ExperienceLink href="http://www.influxermerch.com">
                Influxer Merch Shopify Website
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Spend Life Wisely"
              date="2022 - 2023"
              jobTitle="Principal Consultant with Improving"
            >
              <p>
                Acted as the lead mobile developer using SwiftUI for the social
                networking app Our Community. I moved the app to a simpler
                architecture and rebuilt the components to be more flexible and
                consistent. I also mentored juniors on the frontend team, and
                provided technical and problem solving assistance for the entire
                team.
              </p>
              <ExperienceLink href="https://apps.apple.com/us/app/our-community-local-events/id1575928251">
                Our Community on the App Store
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="OxeFit"
              date="2021 - 2022"
              jobTitle="Senior Consultant with Improving"
            >
              <p>
                Implemented custom and complex UI animations and interactions in
                a React Native video platform app. Unfortunately, it was never
                released to the public.
              </p>
              <ExperienceLink href="https://www.oxefit.com/">
                OxeFit Marketing Website
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Federation of State Medical Boards"
              date="2020 - 2021"
              jobTitle="Senior Consultant with Improving"
            >
              <p>
                Implemented new features and polished existing UI in a .NET web
                app designed to connect nurses and doctors to hospitals in need.
              </p>
              <ExperienceLink href="https://www.providerbridge.org/">
                ProviderBridge
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Toyota of North America"
              date="2019 - 2020"
              jobTitle="Senior Consultant with Improving"
            >
              <p>
                Architected and developed the high fidelity working prototype
                implementation of the next generation Lexus & Toyota media
                interface. I Worked directly with a large team of UX designers
                using the iPad and SwiftUI.
              </p>
              <ExperienceLink href="https://pressroom.lexus.com/the-all-new-lexus-interface-multimedia-system-is-here-and-it-is-a-game-changer/">
                Lexus Press Release
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Eagle Metal"
              date="2018 - 2019"
              jobTitle="Senior Consultant with Improving"
            >
              <p>
                Polished the UI and rewrote the data layer for their roof truss
                planning & ordering app.
              </p>
              <ExperienceLink href="https://eaglemetal.com/">
                Visit Eagle Metal
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="WatchGuard Video"
              date="2014 - 2018"
              jobTitle="Senior Consultant with Improving"
            >
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
            <ExperienceBox
              company="Thompson Reuters"
              date="2013 - 2014"
              jobTitle="Senior Consultant with Improving"
            >
              <p>
                Audited security practices across organization, enhanced tax
                form management software dealing directly with PDF files within
                the WPF app.
              </p>
              <ExperienceLink href="https://tax.thomsonreuters.com/en">
                Visit Tax & Accounting Software
              </ExperienceLink>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="SpaceX"
              date="2013"
              jobTitle="Software Consultant with Excolo"
            >
              <p>
                Hired and managed team that built out a data center product
                procurement website using ASP.net MVC.
              </p>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Cisco Systems"
              date="2010 - 2013"
              jobTitle="Software Consultant with CH Reynolds"
            >
              <p>
                Enhanced the existing Silverlight app that would visually manage
                data center resources with a drag and drop UI.
              </p>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="Allegro Development"
              date="2007 - 2010"
              jobTitle="Software Developer"
            >
              <p>
                Rewrote and enhanced a complex forecasting module written in C#
                which was part of a very large oil & gas management suite.
              </p>
            </ExperienceBox>
          </li>
          <li>
            <ExperienceBox
              company="FedEx Kinkos"
              date="2007"
              jobTitle="Developer"
            >
              <p>
                Worked with a team to transform large data sets using visual
                tools.
              </p>
            </ExperienceBox>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>Education</h2>

        <ExperienceBox
          company="University of Texas at Dallas"
          date="2002 - 2007"
          jobTitle="B.S. Computer Science"
        >
          <p>
            <strong>Notable Classes</strong>
            <span>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;</span>
            Object Oriented Analysis & Design, Computer Graphics, Data
            Structures
          </p>
        </ExperienceBox>
      </section>
    </>
  )
}
