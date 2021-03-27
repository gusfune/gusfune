import { GetServerSideProps, invokeWithMiddleware } from "blitz"
import getLink from "app/links/queries/getLink"

export const getServerSideProps: GetServerSideProps = async ({ params, req, res }) => {
  const data = await invokeWithMiddleware(getLink, { slug: params?.slug as string }, { req, res })
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    redirect: {
      destination: data.url,
      permanent: false,
    },
  }
}

function Page({ link }) {
  return <p>{link.slug}</p>
}
export default Page
