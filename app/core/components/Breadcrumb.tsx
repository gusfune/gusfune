import { Link } from "blitz"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSlash } from "@fortawesome/free-solid-svg-icons"

export type BreadCrumbType = { name: string; link: string }

type Props = {
  tree: BreadCrumbType[]
}

export const Breadcrumb = ({ tree }: Props) => (
  <header className="z-10 w-full bg-white shadow md:fixed md:top-0 md:left-0">
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="py-3 border-t border-gray-200">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <Link href="/hey">
                  <a className="text-gray-400 hover:text-gray-500">
                    <FontAwesomeIcon icon={faHome} width={20} className="flex-shrink-0 w-5 h-5" />
                    <span className="sr-only">Home</span>
                  </a>
                </Link>
              </div>
            </li>
            {tree &&
              tree.map((item, i) => (
                <li key={i}>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faSlash}
                      width={20}
                      className="flex-shrink-0 w-5 h-5 text-gray-300"
                      transform={{ rotate: 90 }}
                    />
                    <Link href={item.link}>
                      <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                        {item.name}
                      </a>
                    </Link>
                  </div>
                </li>
              ))}
          </ol>
        </nav>
      </div>
    </div>
  </header>
)
