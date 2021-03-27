import { ReactNode } from "react"
import { Head, dynamic } from "blitz"
import Footnotes from "app/core/components/Footnotes"
import { Breadcrumb, BreadCrumbType } from "app/core/components/Breadcrumb"
const DarkModeToggle = dynamic(
  () => import("app/core/components/DarkMode").then((mod) => mod.DarkModeToggle),
  {
    ssr: false,
  }
)

type LayoutProps = {
  title?: string
  children: ReactNode
  breadcrumbs?: BreadCrumbType[]
}

const Layout = ({ title, children, breadcrumbs }: LayoutProps) => (
  <>
    <Head>
      <title>{title || "Gus Fune"}</title>
    </Head>
    {breadcrumbs && <Breadcrumb tree={breadcrumbs} />}
    <div className="flex flex-col items-center justify-center w-full min-h-screen align-middle bg-gray-100 font-body dark:bg-gray-800 dark:text-gray-300">
      {children}
      <footer className="py-2 text-center">
        <div className="mx-auto my-4 text-center">
          <DarkModeToggle />
        </div>
        <Footnotes />
      </footer>
    </div>
  </>
)

export default Layout
