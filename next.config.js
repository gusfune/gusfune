const { withSentryConfig } = require("@sentry/nextjs")

const SentryWebpackPluginOptions = {
  silent: true,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

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

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
