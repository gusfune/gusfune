import { envsafe, url } from "envsafe"

export const browserEnv = envsafe(
  {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: url({
      input: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    }),
  },
  {
    strict: true,
  }
)
