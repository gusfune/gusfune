import { ReactNode } from "react"
import { Head } from "blitz"
import CookieConsent from "react-cookie-consent"
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
      <div className="w-full p-8 lg:p-16 sm:w-7/12 md:w-8/12 lg:w-9/12 dark:bg-gray-800 dark:text-gray-300">
        {children}
      </div>
      <Sidebar />
    </div>
    <CookieConsent
      location="bottom"
      buttonText="Ok!"
      cookieName="gusfuneCookie"
      style={{ background: "#111", fontSize: "1.1rem" }}
      buttonStyle={{ color: "#000", background: "#fff" }}
      expires={150}
    >
      This website uses cookies so I can find ways to improve it over time. Because of regulation, I
      am obliged to tell you so, but no worries, all data is kept anonymous and never shared with
      third-parties.{" "}
    </CookieConsent>
  </>
)

export default Layout
