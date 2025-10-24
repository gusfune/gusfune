/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import path from "path"

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
    ]
  },
  turbopack: {
    root: path.join(__dirname, ".."),
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// const withMDX = require("@next/mdx")();
export default withMDX(nextConfig)
