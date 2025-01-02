import { notFound } from "next/navigation"
import { formatDate, getBlogPosts } from "../utils"
import { baseUrl } from "../../sitemap"
import { CustomMDX } from "@/mdx-components"

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const slug = (await params).slug
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    return {
      title: "404 - Page Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/journal/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/journal/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }: PageProps) {
  const slug = (await params).slug
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.metadata.title,
            "datePublished": post.metadata.publishedAt,
            "dateModified": post.metadata.publishedAt,
            "description": post.metadata.summary,
            "image": post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            "url": `${baseUrl}/journal/${post.slug}`,
            "author": {
              "@type": "Person",
              "name": "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-4xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center my-2">
        <p className="text-sm text-neutral-600">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="space-y-4">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
