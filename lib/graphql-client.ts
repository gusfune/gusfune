import { request, GraphQLClient } from "graphql-request"
import { DocumentNode } from "graphql"

const endpoint =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"

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
