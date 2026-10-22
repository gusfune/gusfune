import { buildLlmsTxt, textResponse } from "@/lib/markdown"

export const dynamic = "force-static"

export const GET = () => textResponse(buildLlmsTxt())
