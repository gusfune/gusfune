import Image from "next/image"
import BaerImage from "@assets/baerskin.svg"
import MachAmbassadorImage from "@assets/ambassador-certified-25.svg"
import { CertificationList } from "@/components/Certification"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import { sourceCode } from "@/lib/fonts"
import Link from "next/link"

const Excuses = dynamic(() => import("@/components/Excuses"), {
  loading: () => <Skeleton className="w-full h-[48px]" />,
})

export default function Page() {
  return (
    <div className="space-y-16 max-w-2xl">
      <section id="intro" className="pt-4 sm:pt-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight pb-4 leading-tight">
          Hi, I&apos;m Gus Fune
        </h2>
        <p className="text-lg">
          I&apos;m a CTO who has delivered over 100 products to scale. Some of
          these products were even developed before the cloud!
        </p>
        <p className="text-lg">I talk about management, leadership, e-commerce, AI and tech.</p>
      </section>

      <section id="work">
        <h3 className="text-2xl font-bold tracking-tight mb-3">What do you do?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 gap-4 my-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <Image
                src={BaerImage}
                alt="BÆRSkin Tactical Supply Co."
                width={120}
                height={64}
                className="sm:mx-auto block aspect-square"
              />
            </div>
            <p>
              I&apos;m the <strong>CTO and Managing Partner</strong> at{" "}
              <a href="https://baerskintactical.com" target="_blank" rel="noopener noreferrer">
                BÆRskin Tactical
              </a>
              , been here building the tools, tech and people since the brand
              early days in 2021.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <Image
                src={MachAmbassadorImage}
                alt="MACH Alliance Ambassador"
                width={120}
                height={64}
                className="sm:mx-auto block aspect-square"
              />
            </div>
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
          <a href="https://useflow.tech/" target="_blank" rel="noopener noreferrer">
            might not heard of
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
      </section>

      <section id="certifications">
        <h3 className="text-2xl font-bold tracking-tight mb-3">Do you have badges?</h3>
        <p className="mb-8">
          I GOT BADGES! Everyone loves a certification/credential badge, here
          are a few of my favourite ones.
        </p>
        <CertificationList />
      </section>

      <section id="services">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          Are you available for consulting work?
        </h3>
        <Excuses />
      </section>

      <section id="speaking">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          What about public speaking?
        </h3>
        <p className="mb-1">
          Yes, I have joined a couple of high-profile and cool events over the
          years. Here are the most recent ones with links:
        </p>

        <ol className="space-y-2 mb-4">
          <li>
            <a
              href="https://machalliance.org/events/mach-x-2025-london"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              <strong>MACH X (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - Oct &apos;25)</strong> - Panelist
              in 3 panels and keynote speaker on Engineering track: "Harder,
              Better, Faster, Stronger – BÆRSkin's FAFO playbook for AI success"
            </a>
          </li>
          <li>
            <strong>BetterTech (🔈 Podcast - Sep &apos;25)</strong> - The Brave
            New World of eCommerce
            <ul className="list-disc list-inside ml-4">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=y7BdVVP4ay4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Participation on The Ecommerce Toolbox: Expert Perspectives (🔈
              Podcast - May &apos;25)
            </strong>{" "}
            - From Chaos to Composable: Inside Baerskin&apos;s Tactical Rebuild
            <ul className="list-disc list-inside ml-4">
              <li>
                <a
                  href="https://podcasts.apple.com/us/podcast/from-chaos-to-composable-inside-baerskin-tacticals/id1695871656?i=1000708443380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/episode/2KMiwIPgpDq3OY0KxDGxjj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=ZKX3LMIZZSc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://machalliance.org/events/mach-three"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              <strong>MACH Three (New York City, 🇺🇸 - June &apos;24)</strong> -
              Co-hosted 3 workshops: The Developer Hero Culture... How to Manage
              & Balance; The Truth & Lies Around Low-Code (as an Enabler of
              Customer Experience); When to Build—When to Buy.
            </a>
          </li>
          <li>
            <a
              href="https://turingfest.com/videos/gus-fune-development-setup-how-an-important-part-of-your-toolset-is-often-overlooked/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              <strong>
                Turing Fest 2022 (Edinburgh, 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇬🇧 - July &apos;22)
              </strong>{" "}
              - Development Setup: How An Important Part of Your Toolset Is
              Often Overlooked (long version)
            </a>
          </li>
          <li>
            <a
              href="https://leaddev.com/london/video/development-setup-how-important-part-your-toolset-often-overlooked"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              <strong>
                LeadDev London 2022 (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - June &apos;22)
              </strong>{" "}
              - Development setup: how an important part of your toolset is
              often overlooked (short version)
            </a>
          </li>
          <li>
            <a
              href="https://hasura.io/events/hasura-con-2021/speakers/gus-fune/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              <strong>HasuraCon&apos;21 (remote - June &apos;21)</strong> -
              Building Off Script on Hasura from day 0: what we learned
            </a>
          </li>
        </ol>
        <p className="my-4">
          <Link href="/speaking">
            Full list of events is available in the speaking page
          </Link>
          . I am available for speaking at events and conferences.{" "}
          <Link href="/#contact">Contact me</Link> for more information.
        </p>
      </section>

      <section id="ecommerce">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          What&apos;s the correct way to spell &ldquo;e-commerce&rdquo;?
        </h3>
        <p className="mb-1">
          Pascal case &ldquo;<code className={sourceCode.className}>ECommerce</code>
          &rdquo; ✅<br />
          camelCase &ldquo;<code className={sourceCode.className}>eCommerce</code>
          &rdquo; ✅<br />
          kebab-case &ldquo; <code className={sourceCode.className}>e-commerce</code>
          &rdquo; ✅<br />
          snake_case &ldquo;<code className={sourceCode.className}>e_commerce</code>
          &rdquo; 👎
        </p>
      </section>

      <section id="writing">
        <h3 className="text-2xl font-bold tracking-tight mb-3">
          Do you write about the things you talk about?
        </h3>
        <p className="mb-4">
          Yes check the <Link href="/journal">journal</Link> page.
        </p>
      </section>

      <section id="contact">
        <h3 className="text-2xl font-bold tracking-tight mb-3">Can I get in touch?</h3>
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
          <a
            href="https://www.linkedin.com/in/gusfune/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg transition-colors duration-200 hover:bg-foreground/10 no-underline"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://www.twitter.com/gusfune"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2.5 rounded-lg transition-colors duration-200 hover:bg-foreground/10 no-underline"
          >
            <Twitter size={32} />
          </a>
          <a
            href="https://github.com/gusfune"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg transition-colors duration-200 hover:bg-foreground/10 no-underline"
          >
            <Github size={32} />
          </a>
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-2.5 rounded-lg transition-colors duration-200 hover:bg-foreground/10 no-underline"
          >
            <Youtube size={32} />
          </a>
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
