import { GetStaticProps } from "next"
import { PrismaClient, Recommendation, ProjectLink } from "@prisma/client"
import Image from "next/image"
import { NextSeo } from "next-seo"
import Layout from "components/Layout"
import { GetProjectsQuery } from "lib/graphql"
import { ProjectList, ProjectLoader } from "components/Project"
import {
  RecommendationList,
  RecommendationLoader,
} from "components/Recommendation"
import { Suspense } from "react"

export const getStaticProps: GetStaticProps = async () => {
  try {
    const prisma = new PrismaClient()
    const projects: {
      links: ProjectLink[]
    }[] = await prisma.project.findMany({
      orderBy: { year: "desc" },
      select: {
        createdAt: false,
        updatedAt: false,
        links: true,
      },
    })
    const recommendations: Recommendation[] =
      await prisma.recommendation.findMany()
    return {
      props: {
        initialData: {
          projects,
          recommendations,
        },
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: {
        initialData: {
          projects: null,
          recommendations: null,
        },
      },
    }
  }
}

interface Props {
  initialData: {
    projects?: GetProjectsQuery | null
    recommendations?: Recommendation[] | null
  }
}

const HomePage = ({}: Props) => (
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
      <Suspense fallback={<ProjectLoader />}>
        <ProjectList />
      </Suspense>
      <Suspense fallback={<RecommendationLoader />}>
        <RecommendationList />
      </Suspense>
    </section>
  </Layout>
)

export default HomePage
