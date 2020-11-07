import { NextSeo } from "next-seo"
import Layout from "components/Layout"
import Projects from "components/Projects"
import Recommendations from "components/Recommendations"

const IndexPage = () => {
  return (
    <Layout>
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
        <h3 className="text-3xl font-light">
          I'm a CTO who delivered over 100 products to scale.
        </h3>
      </header>
      <Projects />
      <Recommendations />
    </Layout>
  )
}

export default IndexPage
