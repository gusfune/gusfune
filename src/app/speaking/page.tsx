import { Metadata, Viewport } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Speaking | Gus Fune",
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
    <main className="space-y-4 max-w-2xl">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">Speaking</h1>
        <p>Here are a few of the events I have spoken at over the years.</p>
        <ol className="space-y-2 mb-8">
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
              href="https://evolutionjobs.com/exchange/evo-inspires-gus-fune-chief-technology-officer-divbrands-episode-2/"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>
                Evolution Jobs - Evo Inspire (Podcast - July &apos;24)
              </strong>{" "}
              - Episode 2
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
              href="https://evolutionjobs.com/exchange/evo-inspires-gus-fune-chief-technology-officer-divbrands-episode-1/"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>
                Evolution Jobs - Evo Inspire (Podcast - June &apos;24)
              </strong>{" "}
              - Episode 1
            </a>
          </li>
          <li>
            <a
              href="https://sentry.io/resources/session-replay-troubleshooting/"
              target="_blank"
              className="underline hover:opacity-75"
            >
              <strong>Sentry Webinar (Remote - May &apos;23)</strong> - Session
              Replay for Developers: Your Shortcut to Faster Troubleshooting
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

        <p className="mt-4">
          I&apos;ve also jonined joined in on some podcasts and other events
          that I, sadly, no longer have links for. These are known as “the lost
          files”
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
      </section>

      <section className="space-y-2">
        <p>
          {" "}
          I am available for speaking at events and conferences.{" "}
          <Link href="/#contact">Contact me</Link> for more information.
        </p>
      </section>
    </main>
  )
}
