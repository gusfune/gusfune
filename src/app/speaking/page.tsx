import { Metadata } from "next"
import Link from "next/link"
import { lostFiles, talks } from "@/content/speaking"
import type { Talk } from "@/content/speaking"

export const metadata: Metadata = {
  title: "Speaking",
}

const TalkBody = ({ talk }: { talk: Talk }) => (
  <>
    <strong>{talk.title}</strong> - {talk.description}
  </>
)

/**
 * One entry in the speaking list.
 *
 * A talk with a single canonical page links the whole line. A talk that lives
 * on several platforms keeps the line plain and lists the platforms below it,
 * because there is no one destination to send the reader to.
 */
const TalkEntry = ({ talk }: { talk: Talk }) => (
  <li>
    {talk.url ? (
      <a
        href={talk.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-75"
      >
        <TalkBody talk={talk} />
      </a>
    ) : (
      <TalkBody talk={talk} />
    )}
    {talk.links ? (
      <ul className="list-disc list-inside ml-4">
        {talk.links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    ) : null}
  </li>
)

export default function Page() {
  return (
    <div className="space-y-8 max-w-2xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Speaking</h1>
        <p>Here are a few of the events I have spoken at over the years.</p>
        <ol className="space-y-2 mb-8">
          {talks.map((talk) => (
            <TalkEntry key={talk.title} talk={talk} />
          ))}
        </ol>

        <p className="mt-4">
          I&apos;ve also joined in on some podcasts and other events that I,
          sadly, no longer have links for. These are known as &quot;the lost
          files&quot;
        </p>
        <ul className="space-y-2 mt-1">
          {lostFiles.map((talk) => (
            <TalkEntry key={talk.title} talk={talk} />
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <p>
          {" "}
          I am available for speaking at events and conferences.{" "}
          <Link href="/#contact">Contact me</Link> for more information.
        </p>
        <p className="font-semibold">
          Note: For BÆRSkin Tactical customer support or product issues, please
          use the official channel:{" "}
          <a href="mailto:support@baerskintactical.com">
            support@baerskintactical.com
          </a>
        </p>
      </section>
    </div>
  )
}
