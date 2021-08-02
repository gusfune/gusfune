import { GetServerSideProps } from "next"
import Layout from "components/Layout"
import { GetLinkQuery, GetLinkDocument } from "lib/graphql"
import { requestGql } from "lib/graphql-client"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    }
  }
  const slug = params.slug
  const data = await requestGql<GetLinkQuery>(GetLinkDocument, { slug })

  if (data && data.link) {
    return {
      redirect: {
        destination: data.link?.url,
        permanent: false,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}

const LinkSlugPage = () => {
  return (
    <Layout>
      <p>Redirecting...</p>
    </Layout>
  )
}

export default LinkSlugPage
