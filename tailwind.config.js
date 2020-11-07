module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
}
