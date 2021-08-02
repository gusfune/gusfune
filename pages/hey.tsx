import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import Layout from "components/Layout"
import Panel from "components/Panel"
import LinkList from "components/Link/List"
import { GetLinksQuery, GetLinksDocument } from "lib/graphql"
import { requestGql } from "lib/graphql-client"
import MeHat from "components/MeHat"

export const getStaticProps: GetStaticProps = async () => {
  const links = await requestGql<GetLinksQuery>(GetLinksDocument)
  return {
    props: {
      initialData: {
        links,
      },
    },
  }
}

interface Props {
  initialData: {
    links: GetLinksQuery
  }
}

const Hey = ({ initialData }: Props) => (
  <Layout title="Hey">
    <div className="container w-full max-w-md mx-auto my-8">
      <NextSeo
        title="Gus Fune"
        description="Hey welcome to my landing page. Here are a couple of interesting things."
        canonical="https://gusfune.com/hey"
      />
      <div className="mb-8 md:mt-10">
        <MeHat />
      </div>
      <Panel
        head={
          <p>
            Hey welcome to my landing page. Here are a couple of interesting
            things.
          </p>
        }
        role="main"
      >
        <LinkList initialData={initialData.links} />
      </Panel>
    </div>
  </Layout>
)

export default Hey
