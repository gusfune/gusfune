import Image from "next/image"
import BaerImage from "@assets/baerskin.svg"
import DivImage from "@assets/divbrands.svg"
// import MachImage from "@assets/mach.svg"
import MachAmbassadorImage from "@assets/ambassador-certified-25.svg"
import { CertificationList } from "@/components/Certification"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { Metadata, Viewport } from "next"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import Construction from "@assets/construction.gif"
import { Source_Code_Pro } from "next/font/google"
import Link from "next/link"

const code = Source_Code_Pro({ subsets: ["latin"] })

const Excuses = dynamic(() => import("@/components/Excuses"), {
  loading: () => <Skeleton className="w-full h-[48px]" />,
})

export const metadata: Metadata = {
  title: "Gus Fune",
  description: "e-commerce, tech and stuff...",
  creator: "Gus Fune",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
}

export const viewport: Viewport = {
  themeColor: "white",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function Page() {
  return (
    <main className="space-y-12 max-w-2xl">
      <section id="intro">
        <h2 className="text-2xl pb-4">
          Hi, I&apos;m <strong>Gus Fune</strong>
        </h2>
        <p>
          I&apos;m a CTO who has delivered over 100 products to scale. Some of
          these products were even developed before the cloud!
        </p>
        <p>I talk about management, leadership, e-commerce and tech.</p>
      </section>

      <section id="work">
        <h3 className="text-xl font-semibold mb-2">What do you do?</h3>
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
              <Image
                src={DivImage}
                alt="Div Brands"
                width={120}
                height={120}
                className="mx-auto aspect-square hidden sm:block"
              />
            </div>
            <p>
              I&apos;m the <strong>CTO and Managing Partner</strong> at{" "}
              <a href="https://div-brands.com/" target="_blank">
                Div Brands
              </a>
              , an e-commerce holding group for brands like{" "}
              <a href="https://baerskintactical.com" target="_blank">
                BÆRskin Tactical
              </a>
              .
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
                className="underline"
              >
                MACH Alliance
              </a>
              , where I help advocate for open and best-of-breed enterprise
              technology in e-commerce ecosystems.
            </p>
          </div>
        </div>
        <hr className="w-1/3 mb-4 bg-slate-700 mx-auto" />
        <p className="font-light">
          My previous roles include working at a few startups (
          <a
            href="https://www.wired.com/story/europe-hottest-startups-2021/"
            target="_blank"
          >
            that you might
          </a>{" "}
          or{" "}
          <a href="https://useflow.tech/" target="_blank">
            might not heard of
          </a>{" "}
          ). I have also done a lot of consulting work for companies in various
          fields, from small ones to large enterprises, including Banks,
          Airlines, Consumer Goods, Car Makers, NGOs, Gov, etc.
        </p>
      </section>

      <section id="certifications">
        <h3 className="text-xl font-semibold mb-2">Do you have badges?</h3>
        <p className="mb-8">
          I GOT BADGES! Everyone loves a certification/credential badge, here
          are a few of my favourite ones.
        </p>
        <CertificationList />
      </section>

      <section id="services">
        <h3 className="text-xl font-semibold mb-2">
          Are you available for consulting work?
        </h3>
        <Excuses />
      </section>

      <section id="speaking">
        <h3 className="text-xl font-semibold mb-2">
          What about public speaking?
        </h3>
        <p className="mb-1">
          Yes, I have joined a couple of high-profile and cool events over the
          years. Here are the most recent ones with links:
        </p>

        <ol className="space-y-2 mb-4">
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
                  className="underline hover:opacity-75"
                >
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/episode/2KMiwIPgpDq3OY0KxDGxjj"
                  target="_blank"
                  className="underline hover:opacity-75"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=ZKX3LMIZZSc"
                  target="_blank"
                  className="underline hover:opacity-75"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://machalliance.org/mach-annual-conference"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>
                The Composable Conference 2025 (Chicago, 🇺🇸 - April &apos;25)
              </strong>{" "}
              - Co-hosted workshop: Workshop: Remaining Committed How to stay
              true to your mission and member of Jury for the MACH Impact Awards
            </a>
          </li>
          <li>
            <a
              href="https://machalliance.org/events/business-value-of-mach-technologies"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>
                Business Value of MACH Technologies (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - October
                &apos;24)
              </strong>{" "}
              - Panelist
            </a>
          </li>
          <li>
            <a
              href="https://machalliance.org/events/mach-three"
              target="_blank"
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
              className="underline hover:opacity-75"
            >
              <strong>
                LeadDev London 2022 (London, 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 - June &apos;22)
              </strong>{" "}
              - Development setup: how an important part of your toolset is
              often overlooked (short version)
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

      <section id="contact">
        <h3 className="text-xl font-semibold mb-2">
          What&apos;s the correct way to spell &ldquo;e-commerce&rdquo;?
        </h3>
        <p className="mb-1">
          Pascal case &ldquo;<code className={code.className}>ECommerce</code>
          &rdquo; ✅<br />
          camelCase &ldquo;<code className={code.className}>eCommerce</code>
          &rdquo; ✅<br />
          kebab-case &ldquo; <code className={code.className}>e-commerce</code>
          &rdquo; ✅<br />
          snake_case &ldquo;<code className={code.className}>e_commerce</code>
          &rdquo; 👎
        </p>
      </section>

      <section id="writing">
        <h3 className="text-xl font-semibold mb-2">
          Do you write about the things you talk about?
        </h3>
        <p className=" mb-4">
          Yes, but not enough. And I haven&apos;t finished this part of the site
          yet. So here, a throwback to 1998.
        </p>
        <Image
          src={Construction}
          alt="Under construction"
          width={459}
          height={28}
        />
      </section>

      <section id="contact">
        <h3 className="text-xl font-semibold mb-2">Can I get in touch?</h3>
        <p className="mb-1">
          Yes, you can contact me at{" "}
          <a href="mailto:gus@fune.uk">gus@fune.uk</a>, or any social network
          below.
        </p>
        <div className="flex flex-row">
          <a
            href="https://www.linkedin.com/in/gusfune/"
            target="_blank"
            className="p-2 hover:bg-slate-100 hover:rounded-lg"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://www.twitter.com/gusfune"
            target="_blank"
            className="p-2 hover:bg-slate-100 hover:rounded-lg"
          >
            <Twitter size={32} />
          </a>
          <a
            href="https://github.com/gusfune"
            target="_blank"
            className="p-2 hover:bg-slate-100 hover:rounded-lg"
          >
            <Github size={32} />
          </a>
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            className="p-2 hover:bg-slate-100 hover:rounded-lg"
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
    </main>
  )
}
