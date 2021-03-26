import { Suspense } from "react"
import { BlitzPage, GetStaticProps, InferGetStaticPropsType, Ctx } from "blitz"
import { NextSeo } from "next-seo"
import Layout from "app/core/layouts/Layout"
import { ProjectList, ProjectLoader } from "app/projects/components"
import { RecommendationList, RecommendationLoader } from "app/recommendations/components"
import { useDarkMode } from "app/core/components/DarkMode"
import getProjects from "app/projects/queries/getProjects"
import getRecommendations from "app/recommendations/queries/getRecommendations"

export const getStaticProps: GetStaticProps = async (context) => {
  const { projects } = await getProjects({}, context as Ctx)
  const { recommendations } = await getRecommendations({}, context as Ctx)
  return {
    props: {
      initialData: {
        projects,
        recommendations,
      },
    },
  }
}

const Home: BlitzPage = ({ initialData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { darkMode } = useDarkMode()
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <NextSeo
        title="Gus Fune"
        description="I'm a highly technical Web &amp; Mobile Product Manager who delivered over 100 products to scale."
        canonical="https://gusfune.com"
        twitter={{
          handle: "@gusfune",
          cardType: "summary_large_image",
        }}
      />
      <header className="mb-8">
        <h2 className="mb-4 text-4xl font-light">
          Hi, I'm <span className="font-semibold">Gus Fune</span>
        </h2>
        <h3 className="text-3xl font-light">I'm a CTO who delivered over 100 products to scale.</h3>
      </header>
      <Suspense fallback={<ProjectLoader />}>
        <ProjectList initialData={initialData} />
      </Suspense>
      <Suspense fallback={<RecommendationLoader />}>
        <RecommendationList initialData={initialData} />
      </Suspense>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
