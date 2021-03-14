import { useState, useLayoutEffect } from "react"
import { Switch } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import store from "store2"

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    store.has("darkMode") ||
      (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    return
  }, [darkMode])

  const toggle = () => {
    if (store.has("darkMode")) {
      store.remove("darkMode")
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    } else {
      store.set("darkMode", true)
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }

  return { darkMode, toggle }
}

const DarkModeToggle = () => {
  const { darkMode, toggle } = useDarkMode()
  return (
    <Switch
      checked={darkMode}
      onChange={() => toggle()}
      className={`${
        darkMode ? "bg-indigo-600" : "bg-gray-200"
      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={`${
          darkMode ? "translate-x-5" : "translate-x-0"
        } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
      >
        <span
          className={`${
            darkMode ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faSun} className="w-3 h-3 text-gray-400 bg-white" width="12" />
        </span>
        <span
          className={`${
            darkMode ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faMoon} className="w-3 h-3 text-indigo-600 bg-white" width="12" />
        </span>
      </span>
    </Switch>
  )
}

export { useDarkMode, DarkModeToggle }
