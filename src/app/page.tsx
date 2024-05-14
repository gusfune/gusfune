import Image from "next/image"
import MachImage from "@assets/mach.svg"
import DivImage from "@assets/divbrands.svg"
import { CertificationList } from "@/components/Certification"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { Metadata, Viewport } from "next"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import Construction from "@assets/construction.gif"

const Excuses = dynamic(() => import("@/components/Excuses"), {
  loading: () => <Skeleton className="w-full h-[48px]" />,
})

export const metadata: Metadata = {
  title: "Gus Fune",
  description: "e-commerce, tech and stuff...",
  creator: "Gus Fune",
  // icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
}

export const viewport: Viewport = {
  themeColor: "white",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function Page() {
  return (
    <main className="space-y-8 max-w-2xl">
      <section id="intro">
        <h2 className="text-2xl">
          Hi, I&apos;m <strong>Gus Fune</strong>
        </h2>
        <p>
          I&apos;m a CTO based in Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 who delivered over 100 products to
          scale, some, before the cloud.
        </p>
        <p>I talk about management, leadership, e-commerce and tech.</p>
      </section>

      <section id="work">
        <h3 className="text-xl font-semibold mb-2">What do you do?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 gap-4 my-4">
          <div className="space-y-4">
            <Image
              src={DivImage}
              alt="Div Brands"
              width={120}
              height={120}
              className="mx-auto block aspect-square"
            />
            <p>
              I&apos;m <strong>CTO and Managing Partner</strong> at{" "}
              <a
                href="https://div-brands.com/"
                target="_blank"
                className="underline"
              >
                Div Brands
              </a>
              , an e-commerce holding group for brands such as{" "}
              <a href="https://baerskintactical.com" target="_blank">
                BÆRskin tactical
              </a>
              ,
              <a href="https://hyperarchmotion.com" target="_blank">
                Hyper Arch Motion
              </a>{" "}
              and{" "}
              <a href="https://cozislides.com" target="_blank">
                Cozi Slides
              </a>
              .
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src={MachImage}
              alt="MACH Alliance"
              width={120}
              height={64}
              className="mx-auto block aspect-square"
            />
            <p>
              I&apos;m also an <strong>Ambassador</strong> at{" "}
              <a
                href="https://machalliance.org/"
                target="_blank"
                className="underline"
              >
                MACH Alliance
              </a>
              where I help advocate for open and best-of-breed enterprise
              technology in e-commerce ecosystems.
            </p>
          </div>
        </div>
        <p className="font-light">
          Previous work includes some startups (
          <a
            href="https://www.wired.com/story/europe-hottest-startups-2021/"
            target="_blank"
          >
            that you might
          </a>{" "}
          or{" "}
          <a href="https://useflow.tech/" target="_blank">
            might not
          </a>
          heard of), a lot of consulting work for companies in many different
          fields, from small ones to large enterprises, including Banks,
          Airlines, Consumer Goods, Car Makers, NGOs, Gov, etc.
        </p>
      </section>

      <section id="certifications">
        <h3 className="text-xl font-semibold mb-2">Do you have badges?</h3>
        <p className="text-sm font-light mb-4">
          YES! Everyone likes a cool certification badge!
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
            <a
              href="https://turingfest.com/videos/gus-fune-development-setup-how-an-important-part-of-your-toolset-is-often-overlooked/"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>
                Turing Fest 2022 (Edinburgh, 🏴󠁧󠁢󠁳󠁣󠁴󠁿🇬🇧 - July &apos;22)
              </strong>{" "}
              - Gus Fune – Development Setup: How An Important Part of Your
              Toolset Is Often Overlooked (long version)
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
          <li>
            <a
              href="https://hasura.io/events/hasura-con-2021/speakers/gus-fune/"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>HasuraCon&apos;21 (remote - June &apos;21)</strong> -
              Building Off Script on Hasura from day 0: what we learned
            </a>
          </li>
        </ol>

        <p className="mt-2">
          I&apos;ve also jonined some podcasts and other events that I no longer
          have links. Those are &ldquo;the lost files&rdquo;:
        </p>
        <ul className="space-y-2 mt-1">
          <li>
            <strong>Hasura Community Call (remote - Aug &apos;23)</strong> -
            Showcasing usage of Hasura on MACH e-commerce
          </li>
          <li>
            <strong>Hasura Community Call (remote - May &apos;21)</strong> -
            Showcasing open-source contribution
          </li>
          <li>
            <strong>Share Curitiba (Curitiba, 🇧🇷 - May &apos;14)</strong> -
            Problems and Trends in Social Apps
          </li>
          <li>
            <strong>SBGames 2022 (Brasília, 🇧🇷 - Nov &apos;11)</strong> - The
            Brazilian Games Media
          </li>
          <li>
            <strong>Ossobuco (Brasília, 🇧🇷 - Jun &apos;12)</strong> - Trip
            Hacking, travel more, better and for less
          </li>
          <li>
            <strong>Campus Party (São Paulo, 🇧🇷 - Jan &apos;11)</strong> -
            Wordpress Optimization
          </li>
        </ul>

        <p className="my-2">
          I am available for speaking at events and conferences.
        </p>
      </section>

      <section id="contact">
        <h3 className="text-xl font-semibold mb-2">
          What&apos;s the correct way to spell &ldquo;e-commerce&rdquo;?
        </h3>
        <p className="mb-1">
          Pascal case &ldquo;ECommerce&rdquo;, camel case
          &ldquo;eCommerce&rdquo; or kebab &ldquo;e-commerce&rdquo; are all
          correct.
          <br />
          Snake case &ldquo;e_commerce&rdquo; is definitively wrong.
        </p>
        <p>Just be consistent, that&apos;s all that matters.</p>
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
          me.
        </p>
      </section>
    </main>
  )
}
