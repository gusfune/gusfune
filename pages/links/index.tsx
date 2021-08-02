import { GetStaticProps } from "next"
import Link from "next/link"
import Layout from "components/Layout"
import { useGetLinksQuery, GetLinksQuery, GetLinksDocument } from "lib/graphql"
import { client, requestGql } from "lib/graphql-client"

export const getStaticProps: GetStaticProps = async (context) => {
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

const LinksPage = ({ initialData }: Props) => {
  const { data: links } = useGetLinksQuery<GetLinksQuery>(
    client,
    {},
    {
      initialData: initialData.links,
    }
  )
  return (
    <Layout title="Links">
      <ul>
        {links &&
          links.links &&
          links.links.map((link) => (
            <li key={link.id}>
              <Link href={`/links/${link.slug}`}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export default LinksPage
