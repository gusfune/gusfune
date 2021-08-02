import dynamic from "next/dynamic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faMedium,
  faSteam,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Footnotes from "components/Footnotes"
const DarkModeToggle = dynamic(() => import("components/DarkMode"), {
  ssr: false,
})

const destinations = [
  {
    link: "https://github.com/gusfune",
    icon: faGithub,
  },
  {
    link: "https://www.twitter.com/gusfune",
    icon: faTwitter,
  },
  {
    link: "https://www.linkedin.com/in/gusfune/",
    icon: faLinkedin,
  },
  {
    link: "https://log.epicawesome.co/@gusfune",
    icon: faMedium,
  },
  {
    link: "https://steamcommunity.com/id/the_killer_panda/",
    icon: faSteam,
  },
  {
    link: "mailto:gus@hey.com",
    icon: faEnvelope,
  },
]

type Props = {
  small?: boolean
}

const Links = ({ small }: Props) => (
  <ul className="flex flex-row justify-start mb-4">
    {destinations.map((item, i) => (
      <li
        key={i}
        className={`inline-block mr-4 ${small ? "text-base" : "text-2xl"}`}
      >
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FontAwesomeIcon icon={item.icon} width={small ? 16 : 22} />
        </a>
      </li>
    ))}
  </ul>
)

const LinksSidebar = () => (
  <div id="sidebar-links">
    <div className="flex flex-row justify-between">
      <Links />
      <DarkModeToggle />
    </div>
    <Footnotes />
  </div>
)

export { Links, LinksSidebar }
