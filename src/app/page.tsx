import { alternatesFor } from "@/lib/markdown-routes"
import { HomeContent } from "./content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: alternatesFor("/"),
}

export default function Page() {
  return <HomeContent />
}
