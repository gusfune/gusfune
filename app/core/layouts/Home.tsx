import { ReactNode } from "react"
import { Head } from "blitz"
import Sidebar from "app/core/components/Sidebar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title || "Gus Fune"}</title>
    </Head>
    <div className="flex flex-col sm:flex-row font-body">
      <div className="w-full p-8 lg:p-16 sm:w-7/12 md:w-8/12 lg:w-9/12 dark:bg-dracula-dark dark:text-dracula-light">
        {children}
      </div>
      <Sidebar />
    </div>
  </>
)

export default Layout
