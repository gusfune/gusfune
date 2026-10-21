import { Metadata } from "next"
import Link from "next/link"
import { getBlogPosts } from "./utils"
import { publications } from "./content"
import { alternatesFor } from "@/lib/markdown-routes"

export const metadata: Metadata = {
  title: "Publications",
  alternates: alternatesFor("/journal"),
}

export default async function Page() {
  const posts = getBlogPosts()

  return (
    <div className="space-y-8 max-w-2xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Publications</h1>
        <p>
          Here are things that I&apos;ve written collaborated or have been
          written about me over the past few years.
        </p>
        <ol className="space-y-2 mb-8">
          {publications.map((publication) => (
            <li key={publication.url}>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
              >
                {publication.kind}:&nbsp;
                <strong>{publication.title}</strong> - {publication.source}
              </a>
            </li>
          ))}
        </ol>
      </section>
      <section className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Journal</h2>
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
