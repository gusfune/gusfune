const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    })
    return config
  },
}

module.exports = nextConfig
