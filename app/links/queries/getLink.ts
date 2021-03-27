import { resolver, NotFoundError } from "blitz"
import db from "db"
import * as z from "zod"

const GetLink = z.object({
  // This accepts type of undefined, but is required at runtime
  slug: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetLink), async ({ slug }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const link = await db.link.findFirst({ where: { slug } })

  if (!link) throw new NotFoundError()

  return link
})
