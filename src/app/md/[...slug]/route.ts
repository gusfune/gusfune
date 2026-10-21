import {
  getAllDocs,
  getDocByPath,
  markdownResponse,
  pathFromSlug,
  slugFromPath,
} from "@/lib/markdown"

// Every document is known at build time, so nothing here needs a live render.
export const dynamic = "force-static"
// Anything outside generateStaticParams is a 404, not an on-demand render.
export const dynamicParams = false

export const generateStaticParams = () =>
  getAllDocs().map((doc) => ({ slug: slugFromPath(doc.path) }))

interface RouteParams {
  params: Promise<{ slug: string[] }>
}

/**
 * The one markdown renderer. Both doors lead here: the `.md` URL and the
 * Accept: text/markdown rewrite, wired in next.config.ts. The handler never
 * learns which door was used, so there is one code path to keep correct.
 */
export const GET = async (_request: Request, { params }: RouteParams) => {
  const doc = getDocByPath(pathFromSlug((await params).slug))

  if (!doc) {
    return new Response("Not found\n", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  }

  return markdownResponse(doc)
}
