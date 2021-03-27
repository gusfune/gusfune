import { SitemapStream, streamToPromise } from "sitemap"
import { IncomingMessage, ServerResponse } from "http"

export default async function sitemapFunc(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "text/xml")
  const pages = [
    {
      full_slug: "/",
      published_at: "2021-03-27",
    },
    {
      full_slug: "/hey",
      published_at: "2021-03-27",
    },
    {
      full_slug: "/uses",
      published_at: "2021-03-27",
    },
  ]
  try {
    // Call the backend to fetch all brands
    const smStream = new SitemapStream({
      hostname: "https://" + req.headers.host,
    })
    for (const page of pages) {
      smStream.write({
        url: page.full_slug,
        lastmod: page.published_at,
      })
    }
    smStream.end()
    const sitemap = await streamToPromise(smStream).then((sm) => sm.toString())
    res.write(sitemap)
    res.end()
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end()
  }
}
