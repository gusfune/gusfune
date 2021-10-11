import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { gql, ApolloServer } from "apollo-server-micro"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

const typeDefs = gql`
  scalar DateTime

  enum ProjectType {
    iOS
    Android
    IoT
    Web
  }

  type ProjectLink {
    id: ID
    type: ProjectType!
    url: String!
    project: Project
    project_id: Int
  }

  type Project {
    id: ID
    title: String!
    description: String!
    logo: String
    role: String!
    year: Int!
    links: [ProjectLink!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    project_types: [ProjectType]
    project(id: ID!): Project
    projects: [Project]
    project_link(project: ID!): [ProjectLink]
    project_links: [ProjectLink]
  }
`

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    project_types: () => ["iOS", "Android", "IoT", "Web"],
    project: (_parent: unknown, args: { id: unknown }) =>
      prisma.project.findUnique({ where: { id: Number(args.id) } }),
    projects: () =>
      prisma.project.findMany({
        include: {
          links: true,
        },
      }),
    project_link: async (_parent: unknown, args: { project: unknown }) => {
      return prisma.projectLink.findMany({
        where: { projectId: Number(args.project) },
      })
    },
    project_links: () => prisma.projectLink.findMany(),
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer
  await server.createHandler({
    path: "/api",
  })(req, res)
}
