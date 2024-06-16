/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx"

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  poweredByHeader: false,
}

// const withMDX = require("@next/mdx")();
export default withMDX(nextConfig)()
