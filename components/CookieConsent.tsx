import { useState, useTransition } from "react"
import { useCookies } from "react-cookie"
import { Transition } from "@headlessui/react"

const CookieConsent = () => {
  const [isPending, startTransition] = useTransition()
  const [cookies, setCookie] = useCookies(["consent"])
  const [show, setShow] = useState(!Boolean(cookies.consent))
  const close = () => {
    startTransition(() => {
      setShow(false)
      setCookie("consent", true)
    })
  }
  if (show && !isPending) {
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                      />
                    </svg>
                  </span>
                  <p className="ml-3 font-medium text-white">
                    This website uses cookies so I can find ways to improve it
                    over time. Because of regulation, I am obliged to tell you
                    so, but no worries, all data is kept anonymous and never
                    shared with third-parties.
                  </p>
                </div>
                <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                  <button
                    type="button"
                    className="flex p-2 -mr-1 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => {
                      close()
                    }}
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    )
  }
  return null
}

export default CookieConsent
