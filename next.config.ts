/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"
import type { NextConfig } from "next"

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
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// const withMDX = require("@next/mdx")();
export default withMDX(nextConfig)
