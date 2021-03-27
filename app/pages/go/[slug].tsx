import { Suspense } from "react"
import { Head, useQuery, useParam, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import getLink from "app/links/queries/getLink"

export const Link = () => {
  const linkSlug = useParam("slug", "string")
  const [link] = useQuery(getLink, { slug: linkSlug })

  return (
    <>
      <Head>
        <title>Link {link.id}</title>
      </Head>

      <div>
        <h1>Link {link.id}</h1>
        <pre>{JSON.stringify(link, null, 2)}</pre>
      </div>
    </>
  )
}

const ShowLinkPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Link />
      </Suspense>
    </div>
  )
}

ShowLinkPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowLinkPage
