const withPlugins = require("next-compose-plugins")
const { withSentryConfig } = require("@sentry/nextjs")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer({})

const SentryWebpackPluginOptions = {
  silent: true,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

withSentryConfig

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = withPlugins(
  [[withSentryConfig, SentryWebpackPluginOptions], [withBundleAnalyzer]],
  moduleExports
)
