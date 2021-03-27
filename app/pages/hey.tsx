import { Suspense } from "react"
import { Ctx, BlitzPage, Image, GetStaticProps, InferGetStaticPropsType } from "blitz"
import { NextSeo } from "next-seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Layout from "app/core/layouts/Layout"
import { useDarkMode } from "app/core/components/DarkMode"
import Panel from "app/core/components/Panel"
import { Links } from "app/core/components/Links"
import getLinks from "app/links/queries/getLinks"
import LinkList from "app/links/components/LinkList"

export const getStaticProps: GetStaticProps = async (context) => {
  const { links } = await getLinks({ where: { featured: true } }, context as Ctx)
  return {
    props: {
      initialData: {
        links,
      },
    },
    revalidate: 1,
  }
}

const Hey: BlitzPage = ({ initialData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { darkMode } = useDarkMode()
  return (
    <div className={`w-full container max-w-md my-8 ${darkMode ? "dark" : "light"}`}>
      <NextSeo
        title="Gus Fune"
        description="Hey welcome to my landing page. Here are a couple of interesting things."
        canonical="https://gusfune.com/hey"
        twitter={{
          handle: "@gusfune",
          cardType: "summary_large_image",
        }}
      />
      <header className="flex flex-row items-center justify-center gap-4 align-middle">
        <div className="flex mb-6 text-center">
          <Image
            src="/gusfune.jpg"
            alt="Gus Fune"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Gus Fune</h1>
          <p className="mb-2">
            CTO @{" "}
            <a
              href="https://offscript.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              Off Script
            </a>
            .
          </p>
          <Links small />
        </div>
      </header>
      <Panel head={<p>Hey welcome to my landing page. Here are a couple of interesting things.</p>}>
        <Suspense fallback={<FontAwesomeIcon icon={faSpinner} width={42} spin />}>
          <LinkList initialData={initialData} />
        </Suspense>
      </Panel>
    </div>
  )
}

Hey.suppressFirstRenderFlicker = true
Hey.getLayout = (page) => <Layout title="Hey">{page}</Layout>

export default Hey
