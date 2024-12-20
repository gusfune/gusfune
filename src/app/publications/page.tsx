import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Publications | Gus Fune",
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
        <h1 className="text-2xl font-bold">Publications</h1>
        <p>
          Here are things that I&apos;ve written collaborated or have been
          written about me over the past few years.
        </p>
        <ol className="space-y-2 mb-8">
          <li>
            <a
              href="https://leaddev.com/technical-direction/migrating-microservices-mach-speed"
              target="_blank"
              className="underline hover:opacity-75"
            >
              ARTICLE:&nbsp;
              <strong>Migrating to microservices at MACH-speed</strong>&apos;
              -Lead Dev, DirectorPlus, by Bill Doerfield - December &apos;24
            </a>
          </li>
          <li>
            <a
              href="https://primer.io/blog/in-conversation-with-gus-fune-chief-technology-officer-at-divbrands"
              target="_blank"
              className="underline hover:opacity-75"
            >
              ARTICLE:&nbsp;
              <strong>
                In conversation with Gus Fune, Chief Technology Officer at
                Divbrands
              </strong>
              &apos; - Primer.io, by James Hayward – August &apos;23
            </a>
          </li>

          <li>
            <a
              href="https://www.checklyhq.com/case-study/divbrands/"
              target="_blank"
              className="underline hover:opacity-75"
            >
              CASE STUDY:&nbsp;
              <strong>
                Checkly’s Impact on Divbrands: Enabling Daily Deployments and
                Reducing Response Times by Over 50%
              </strong>{" "}
              - May &apos;23
            </a>
          </li>

          <li>
            <a
              href="https://controlplane.com/customers/customer/div-brands"
              target="_blank"
              className="underline hover:opacity-75"
            >
              CASE STUDY:&nbsp;
              <strong>Control Plane</strong> - January &apos;24
            </a>
          </li>

          <li>
            <a
              href="https://payloadcms.com/case-studies/divbrands"
              target="_blank"
              className="underline hover:opacity-75"
            >
              CASE STUDY:&nbsp;
              <strong>
                How divbrands future-proofed e-commerce with Payload (January
                &apos;24)
              </strong>
            </a>
          </li>
        </ol>
      </section>
    </main>
  )
}
