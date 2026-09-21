import { Metadata } from "next"
import Link from "next/link"
import { lostFiles, talks } from "@/content/speaking"
import { TalkEntry } from "@/components/TalkEntry"

export const metadata: Metadata = {
  title: "Speaking",
}

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
