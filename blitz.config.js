const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz")

module.exports = {
  poweredByHeader: false,
  middleware: [
    sessionMiddleware({
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  async redirects() {
    return [
      {
        source: "/go",
        destination: "/hey",
        permanent: true,
      },
    ]
  },
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
