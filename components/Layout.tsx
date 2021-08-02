import { ReactNode } from "react"
import Head from "next/head"
import Sidebar from "components/Sidebar"
import { useDarkMode } from "components/DarkMode"
import { DefaultSeo } from "next-seo"

interface Props {
  title?: string
  children: ReactNode
  isHome?: boolean
}

const classNames = (isHome: boolean = false) => {
  let classes =
    "w-full p-8 dark:bg-dracula-dark dark:text-dracula-light min-h-screen"
  if (isHome) {
    classes += " lg:p-16 sm:w-7/12 md:w-8/12 lg:w-9/12"
  }
  return classes
}

const Layout = ({ title, children, isHome }: Props) => {
  const { darkMode } = useDarkMode()
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://gusfune.com/",
          site_name: "Gus Fune",
        }}
        twitter={{
          handle: "@gusfune",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <title>{title ?? "Gus Fune"}</title>
      </Head>
      <div
        className={`flex flex-col sm:flex-row font-body ${
          darkMode ? "dark" : "light"
        }`}
      >
        <div className={classNames(isHome)}>{children}</div>
        {isHome && <Sidebar />}
      </div>
    </>
  )
}

export default Layout
