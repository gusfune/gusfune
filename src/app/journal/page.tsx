import { Metadata, Viewport } from "next"
import Link from "next/link"
import { getBlogPosts } from "./utils"

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

export default async function Page() {
  const posts = await getBlogPosts()

  return (
    <div className="space-y-4 max-w-2xl">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold">Publications</h1>
        <p>
          Here are things that I&apos;ve written collaborated or have been
          written about me over the past few years.
        </p>
        <ol className="space-y-2 mb-8">
          <li>
            <a
              href="https://xiatech.io/resources/get-the-2024-business-value-of-mach-technologies-report"
              target="_blank"
              className="underline hover:opacity-75"
            >
              QUOTE:&nbsp;
              <strong>
                2024 Business Value of Mach Technologies Global Report
              </strong>
              &apos; -Xiatech & OneStock - January &apos;25
            </a>
          </li>
          <li>
            <a
              href="https://open.substack.com/pub/pragmaticengineer/p/bug-management-that-works-part-2"
              target="_blank"
              className="underline hover:opacity-75"
            >
              QUOTE:&nbsp;
              <strong>Bug management that works (part 2)</strong>
              &apos; -The Pragmatic Engineer - January &apos;25
            </a>
          </li>
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
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Journal</h2>
        <p>And here a few things I&apos;ve written myself.</p>
        <ol className="space-y-2 mb-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/journal/${post.slug}`}
                className="underline hover:opacity-75"
              >
                {post.metadata.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
