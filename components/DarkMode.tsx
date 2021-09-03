import { useState, useEffect, ReactNode } from "react"
import { Switch } from "@headlessui/react"
import store from "store2"

interface WrapperProps {
  children: ReactNode
  darkMode: boolean
}

const DarkToggleWrapper = ({ children, darkMode }: WrapperProps) => (
  <span
    className={`${
      darkMode
        ? "opacity-100 ease-in duration-200"
        : "opacity-0 ease-out duration-100"
    } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
    aria-hidden="true"
  >
    {children}
  </span>
)

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    store.has("darkMode") ||
      (typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
  useEffect(() => {
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
        <DarkToggleWrapper darkMode={darkMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-gray-800 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </DarkToggleWrapper>
        <DarkToggleWrapper darkMode={darkMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-indigo-600 bg-white"
            fill="text-indigo-600"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </DarkToggleWrapper>
      </span>
    </Switch>
  )
}

export default DarkModeToggle
export { useDarkMode, DarkModeToggle }
