import About from "app/core/components/About"
import Links from "app/core/components/Links"
import { DarkModeToggle } from "app/core/components/DarkMode"

const Sidebar = () => (
  <aside className="flex flex-col justify-between w-full px-10 py-16 text-gray-500 bg-black sm:fixed sm:right-0 sm:top-0 sm:pb-2 sm:h-screen sm:w-5/12 md:w-4/12 lg:w-3/12">
    <About />
    <DarkModeToggle />
    <section>
      <hr className="pt-2 border-gray-600" />
      <Links />
    </section>
  </aside>
)

export default Sidebar
