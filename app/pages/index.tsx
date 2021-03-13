import { Suspense } from "react"
import { BlitzPage } from "blitz"
import { NextSeo } from "next-seo"
import Layout from "app/core/layouts/Layout"
import { ProjectList, ProjectLoader } from "app/projects/components"
import { RecommendationList, RecommendationLoader } from "app/recommendations/components"
import { useDarkMode } from "app/core/components/DarkMode"

const Home: BlitzPage = () => {
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
      <Suspense
        fallback={
          <>
            <ProjectLoader />
            <ProjectLoader />
            <ProjectLoader />
          </>
        }
      >
        <ProjectList />
      </Suspense>
      <Suspense
        fallback={
          <>
            <RecommendationLoader />
            <RecommendationLoader />
            <RecommendationLoader />
          </>
        }
      >
        <RecommendationList />
      </Suspense>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
