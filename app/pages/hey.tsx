import { BlitzPage, Image, dynamic } from "blitz"
import { NextSeo } from "next-seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "app/core/layouts/Layout"
import { useDarkMode } from "app/core/components/DarkMode"
import Panel from "app/core/components/Panel"
import { Links } from "app/core/components/Links"
const DarkModeToggle = dynamic(
  () => import("app/core/components/DarkMode").then((mod) => mod.DarkModeToggle),
  {
    ssr: false,
  }
)

type NavItemProps = {
  link: string
  title: string
}

const NavItem = ({ link, title }: NavItemProps) => (
  <a
    href={link}
    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group hover:bg-gray-50 hover:text-gray-900"
    aria-current="page"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="truncate">{title}</span>
  </a>
)

const HeyLinks = [
  {
    link: "/",
    title: "My Website",
  },
  {
    link: "https://github.com/gusfune",
    title: "GitHub",
  },
  {
    link: "https://www.twitter.com/gusfune",
    title: "Twitter",
  },
  {
    link: "https://www.linkedin.com/in/gusfune/",
    title: "Linkedin",
  },
  {
    link: "https://log.epicawesome.co/@gusfune",
    title: "Medium",
  },
  {
    link: "mailto:gus@hey.com",
    title: "Email",
  },
]

const Hey: BlitzPage = () => {
  const { darkMode } = useDarkMode()
  return (
    <div className={`w-full container max-w-md my-8 ${darkMode ? "dark" : "light"}`}>
      <NextSeo
        title="Gus Fune"
        description="I'm a highly technical Web &amp; Mobile Product Manager who delivered over 100 products to scale."
        canonical="https://gusfune.com"
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
        <nav className="space-y-1" aria-label="Sidebar">
          {HeyLinks.map((link, i) => (
            <NavItem key={i} link={link.link} title={link.title} />
          ))}
        </nav>
      </Panel>
      <div className="mx-auto my-4 text-center">
        <DarkModeToggle />
      </div>
    </div>
  )
}

Hey.suppressFirstRenderFlicker = true
Hey.getLayout = (page) => <Layout title="Hey">{page}</Layout>

export default Hey
