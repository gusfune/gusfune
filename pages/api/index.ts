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
    id: ID!
    type: ProjectType!
    url: String!
    project: Project
    project_id: Int
  }

  type Project {
    id: ID!
    title: String!
    description: String!
    logo: String
    role: String!
    year: Int!
    links: [ProjectLink!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Link {
    id: ID!
    title: String!
    url: String!
    featured: Boolean!
    slug: String
  }

  type Recommendation {
    id: ID!
    name: String!
    title: String!
    content: String!
    photo: String!
  }

  type Query {
    project_types: [ProjectType!]!
    project(id: ID!): Project
    projects: [Project!]!
    project_link(project: ID!): [ProjectLink!]
    project_links: [ProjectLink!]!
    link(slug: String!): Link
    links(featured: Boolean): [Link!]!
    recommendations: [Recommendation!]!
  }
`

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    project_types: () => ["iOS", "Android", "IoT", "Web"],
    project: (_parent: unknown, args: { id: unknown }) => {
      return prisma.project.findUnique({ where: { id: Number(args.id) } })
    },
    projects: () =>
      prisma.project.findMany({
        include: {
          links: true,
        },
        orderBy: { year: "desc" },
      }),
    project_link: (_parent: unknown, args: { project: unknown }) => {
      return prisma.projectLink.findMany({
        where: { projectId: Number(args.project) },
      })
    },
    project_links: () => prisma.projectLink.findMany(),
    link: (_parent: unknown, args: { slug: string }) => {
      return prisma.link.findUnique({
        where: { slug: args.slug },
      })
    },
    links: (_parent: unknown, args: { featured: boolean }) => {
      return prisma.link.findMany({
        where: { featured: args.featured },
      })
    },
    recommendations: () => prisma.recommendation.findMany(),
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: true,
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
