/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import path from "path"
// Relative, not "@/lib/...": tsconfig path aliases do not apply here.
import { markdownRewrites } from "./src/lib/markdown-routes"

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  poweredByHeader: false,
  redirects: async () => {
    return [
      {
        source: "/publications",
        destination: "/journal",
        permanent: true,
      },
      {
        // The old hand-written file. The spec name is llms.txt, plural.
        source: "/llm.txt",
        destination: "/llms.txt",
        permanent: true,
      },
    ]
  },
  rewrites: async () => markdownRewrites(),
  turbopack: {
    root: path.join(__dirname, ".."),
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// const withMDX = require("@next/mdx")();
export default withMDX(nextConfig)
