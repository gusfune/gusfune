import { GetStaticProps } from "next"
import { PrismaClient } from "@prisma/client"
import Link from "next/link"
import Layout from "components/Layout"
import { useGetLinksQuery, GetLinksQuery } from "lib/graphql"
import { client } from "lib/graphql-client"

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const links = await prisma.link.findMany({
    where: { featured: true },
  })
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
