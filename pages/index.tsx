import { GetStaticProps } from "next"
import { PrismaClient } from "@prisma/client"
import Image from "next/image"
import { NextSeo } from "next-seo"
import Layout from "components/Layout"
import {
  useGetProjectsQuery,
  GetProjectsQuery,
  GetRecommendationsQuery,
  useGetRecommendationsQuery,
} from "lib/graphql"
import { client } from "lib/graphql-client"
import { ProjectList } from "components/Project"
import { RecommendationList } from "components/Recommendation"

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const projects = await prisma.project.findMany({
    orderBy: { year: "desc" },
    select: {
      createdAt: false,
      updatedAt: false,
      links: true,
    },
  })
  const recommendations = await prisma.recommendation.findMany()
  return {
    props: {
      initialData: {
        projects,
        recommendations,
      },
    },
  }
}

interface Props {
  initialData: {
    projects: GetProjectsQuery
    recommendations: GetRecommendationsQuery
  }
}

const HomePage = ({ initialData }: Props) => {
  const { data: projects } = useGetProjectsQuery<GetProjectsQuery>(
    client,
    {},
    {
      initialData: initialData.projects,
    }
  )
  const { data: recommendations } =
    useGetRecommendationsQuery<GetRecommendationsQuery>(
      client,
      {},
      {
        initialData: initialData.recommendations,
      }
    )
  return (
    <Layout title="Home" isHome>
      <NextSeo
        title="Gus Fune"
        description="I'm a highly technical Web &amp; Mobile Product Manager who delivered over 100 products to scale."
        canonical="https://gusfune.com"
      />
      <header className="mb-8" role="banner">
        <div className="flex flex-row items-center space-x-8 align-middle">
          <Image
            src="/gusfune.jpg"
            alt="Gus Fune"
            width={180}
            height={180}
            className="rounded-full"
          />
          <div>
            <h1 className="mb-4 text-4xl font-light">
              Hi, I&apos;m <span className="font-semibold">Gus Fune</span>
            </h1>
            <h2 className="text-3xl font-light">
              I&apos;m a CTO who delivered over 100 products to scale.
            </h2>
          </div>
        </div>
      </header>
      <section role="main">
        <ProjectList initialData={projects} />
        <RecommendationList
          initialData={recommendations as GetRecommendationsQuery}
        />
      </section>
    </Layout>
  )
}

export default HomePage
