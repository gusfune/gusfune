// Prose here is mirrored by hand in src/content/pages/home.md, which is what
// /index.md and the MCP tools serve. Edit both.
import Image from "next/image"
import BaerImage from "@assets/baerskin.svg"
import MachAmbassadorImage from "@assets/ambassador-certified-25.svg"
import { CertificationList } from "@/components/Certification"
import { GitHubContributions } from "@/components/GitHubContributions"
// lucide-react 1.0 dropped every brand icon. Font Awesome via react-icons is
// the one pack that still carries all four, LinkedIn included.
// @see https://lucide.dev/guide/version-1
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { SiSubstack } from "react-icons/si"
import { sourceCode } from "@/lib/fonts"
import Link from "next/link"
import { featuredTalks } from "@/content/speaking"
import { socials } from "@/content/profile"
import type { SocialIcon } from "@/content/profile"
import { TalkEntry } from "@/components/TalkEntry"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/index.md" },
  },
}

/**
 * Icon per social network. Lives here rather than in src/content/profile.ts so
 * that module stays free of JSX and can be read by the markdown and MCP layers.
 */
const socialIcons: Record<SocialIcon, typeof FaGithub> = {
  linkedin: FaLinkedin,
  x: FaXTwitter,
  github: FaGithub,
  substack: SiSubstack,
  youtube: FaYoutube,
}

export default function Page() {
  return (
    <div className="max-w-2xl">
      <section id="intro" className="pt-4 sm:pt-8 mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight pb-4 leading-tight">
          Hi, I&apos;m Gus Fune
        </h2>
        <p className="text-lg leading-relaxed">
          I&apos;m a CTO who has delivered over 100 products to scale. Some of
          these products were even developed before the cloud!
        </p>
        <p className="text-lg mt-1">
          I talk about management, leadership, e-commerce, AI and tech.
        </p>
      </section>

      <section id="work" className="mb-16">
        <h3 className="text-2xl font-bold tracking-tight mb-5">
          What do you do?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Image
              src={BaerImage}
              alt="BÆRSkin Tactical Supply Co."
              width={120}
              height={64}
              className="block aspect-square"
            />
            <p>
              I&apos;m the <strong>CTO and Managing Partner</strong> at{" "}
              <a
                href="https://baerskintactical.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                BÆRskin Tactical
              </a>
              , been here building the tools, tech and people since the brand
              early days in 2021.
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src={MachAmbassadorImage}
              alt="MACH Alliance Ambassador"
              width={120}
              height={64}
              className="block aspect-square"
            />
            <p>
              I&apos;m also an <strong>Ambassador</strong> at the{" "}
              <a
                href="https://machalliance.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MACH Alliance
              </a>
              , where I help advocate for open and best-of-breed enterprise
              technology in e-commerce ecosystems.
            </p>
          </div>
        </div>
        <hr className="w-16 h-0.5 my-6 bg-foreground/30 border-0 mx-0" />
        <p className="font-light">
          My previous roles include working at a few startups (
          <a
            href="https://www.wired.com/story/europe-hottest-startups-2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            that you might
          </a>{" "}
          or{" "}
          <a
            href="https://useflow.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            might not have heard of
          </a>{" "}
          ). I have also done a lot of consulting work for companies in various
          fields, from small ones to large enterprises, including Banks,
          Airlines, Consumer Goods, Car Makers, NGOs, Gov, etc.
        </p>
        <p className="font-light mt-4">
          I&apos;m also a mentor for{" "}
          <a
            href="https://thisiscodebase.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codebase
          </a>
          , mentoring startups in the{" "}
          <a
            href="https://techscaler.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TechScaler
          </a>{" "}
          and{" "}
          <a
            href="https://labs.uk.barclays/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barclays Eagle Labs
          </a>{" "}
          programs across Scotland and the UK.
        </p>
        <p className="font-light mt-4">
          I&apos;m a Fellow of{" "}
          <a
            href="https://www.bcs.org/membership-and-registrations/become-a-member/bcs-fellowship/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BCS, The Chartered Institute for IT
          </a>
          , which is where the FBCS after my name comes from.
        </p>
      </section>

      <section id="certifications" className="mb-16">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          Do you have badges?
        </h3>
        <p className="mb-8">
          I GOT BADGES! Everyone loves a certification/credential badge, here
          are a few of my favourite ones.
        </p>
        <CertificationList />
      </section>

      <section id="speaking" className="mb-16">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          What about public speaking?
        </h3>
        <p className="mb-3">
          Yes, I have joined a couple of high-profile and cool events over the
          years. Here are the most recent ones with links:
        </p>

        <ol className="space-y-3 mb-4">
          {featuredTalks.map((talk) => (
            <TalkEntry key={talk.title} talk={talk} />
          ))}
        </ol>
        <p className="my-4">
          <Link href="/speaking">
            Full list of events is available in the speaking page
          </Link>
          . I am available for speaking at events and conferences.{" "}
          <Link href="/#contact">Contact me</Link> for more information.
        </p>
      </section>

      <section id="github" className="mb-16">
        <GitHubContributions />
      </section>

      <section id="ecommerce" className="mb-12">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          What&apos;s the correct way to spell &ldquo;e-commerce&rdquo;?
        </h3>
        <p className="mb-1">
          Pascal case &ldquo;
          <code className={sourceCode.className}>ECommerce</code>
          &rdquo; ✅<br />
          camelCase &ldquo;
          <code className={sourceCode.className}>eCommerce</code>
          &rdquo; ✅<br />
          kebab-case &ldquo;{" "}
          <code className={sourceCode.className}>e-commerce</code>
          &rdquo; ✅<br />
          snake_case &ldquo;
          <code className={sourceCode.className}>e_commerce</code>
          &rdquo; 👎
        </p>
      </section>

      <section id="writing" className="mb-16">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          Do you write about the things you talk about?
        </h3>
        <p className="mb-4">
          Yes check the <Link href="/journal">journal</Link> page. I also run{" "}
          <a
            href="https://bogusfune.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a boring newsletter
          </a>
          , if that is your sort of thing.
        </p>
      </section>

      <section id="contact" className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          Can I get in touch?
        </h3>
        <p className="mb-1">
          Yes, you can contact me at{" "}
          <a href="mailto:gus@fune.uk">gus@fune.uk</a>, or any social network
          below.
        </p>
        <p className="mb-1 font-semibold">
          Note: For BÆRSkin Tactical customer support or product issues, please
          use the official channel:{" "}
          <a href="mailto:support@baerskintactical.com">
            support@baerskintactical.com
          </a>
        </p>
        <div className="flex flex-row gap-1">
          {socials.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/10 hover:scale-110 no-underline text-foreground"
              >
                <Icon size={32} />
              </a>
            )
          })}
          {/* TODO: https://log.epicawesome.co/@gusfune */}
        </div>
        <p className="text-sm font-light">
          BUT, I am not interested in buying anything. Really, don&apos;t spam
          me. I have already enough SaaS tools, inherited 2 principalities from
          distant cousins (just need the wire to come in) and definitively am
          not looking for staffing solutions.
        </p>
      </section>
    </div>
  )
}
