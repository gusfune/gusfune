import { alternatesFor } from "@/lib/markdown-routes"
import { AboutContent } from "./content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  alternates: alternatesFor("/about"),
}

export default function Page() {
  return <AboutContent />
}
