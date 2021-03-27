import { useState } from "react"
import { Transition } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookieBite, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useCookies } from "react-cookie"

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["consent"])
  const [show, setShow] = useState(!Boolean(cookies.consent))
  const onClose = () => {
    setShow(false)
    setCookie("consent", true)
  }
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-x-0 bottom-0 z-50 pb-2 sm:pb-5">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1 w-0">
                <span className="flex p-2 bg-indigo-800 rounded-lg">
                  <FontAwesomeIcon icon={faCookieBite} width={24} className="w-6 h-6 text-white" />
                </span>
                <p className="ml-3 font-medium text-white">
                  This website uses cookies so I can find ways to improve it over time. Because of
                  regulation, I am obliged to tell you so, but no worries, all data is kept
                  anonymous and never shared with third-parties.
                </p>
              </div>
              <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                <button
                  type="button"
                  className="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={onClose}
                >
                  <span className="sr-only">Dismiss</span>
                  <FontAwesomeIcon icon={faCheck} width={24} className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default CookieConsent
