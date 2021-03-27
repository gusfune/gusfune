import { ReactNode } from "react"
import { Head } from "blitz"
import Footnotes from "app/core/components/Footnotes"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title || "Gus Fune"}</title>
    </Head>
    <div className="flex flex-col items-center justify-center w-full min-h-screen align-middle bg-gray-100 font-body dark:bg-gray-800 dark:text-gray-300">
      {children}
      <footer className="py-2 text-center">
        <Footnotes />
      </footer>
    </div>
  </>
)

export default Layout
