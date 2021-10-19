import { request, GraphQLClient } from "graphql-request"
import { DocumentNode } from "graphql"

const protocol = process.env.NODE_ENV === "production" ? "https" : "http"

const endpoint = `${protocol}://${
  process.env.NEXT_PUBLIC_VERCEL_URL as string
}/api`

const client = new GraphQLClient(endpoint, { headers: {} })

export type Variables = {
  [key: string]: any
}

const requestGql = async <Type>(
  query: DocumentNode | string,
  variables?: Variables
) => {
  const res = await request<Type>(endpoint, query, variables)
  return res
}

export { client, requestGql }
