import { defineConfig, globalIgnores } from "eslint/config"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

// Flat config replaces .eslintrc.json — the default since ESLint 9.
// Held at ESLint 9 on purpose: eslint-config-next 16.3.5 pulls in
// eslint-plugin-react, jsx-a11y and import, none of which run on ESLint 10 yet.
// @see https://eslint.org/docs/latest/use/configure/migration-guide
export default defineConfig([
  globalIgnores([".next/**", "next-env.d.ts", "public/**"]),
  nextCoreWebVitals,
  nextTypeScript,
])
