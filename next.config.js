const { withSentryConfig } = require("@sentry/nextjs")
const { createFalse } = require("typescript")

const SentryWebpackPluginOptions = {
  silent: createFalse,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com"],
  },
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
