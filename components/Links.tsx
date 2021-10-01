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
    title: "GitHub",
    link: "https://github.com/gusfune",
    icon: faGithub,
  },
  {
    title: "Twitter",
    link: "https://www.twitter.com/gusfune",
    icon: faTwitter,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/gusfune/",
    icon: faLinkedin,
  },
  {
    title: "Medium",
    link: "https://log.epicawesome.co/@gusfune",
    icon: faMedium,
  },
  {
    title: "Steam",
    link: "https://steamcommunity.com/id/the_killer_panda/",
    icon: faSteam,
  },
  {
    title: "Email",
    link: "mailto:gus@hey.com",
    icon: faEnvelope,
  },
]

type Props = {
  small?: boolean
}

const Links = ({ small }: Props) => (
  <ul className="flex flex-row justify-start mb-4">
    {destinations.map(({ link, title, icon }, i) => (
      <li
        key={i}
        className={`inline-block mr-4 ${small ? "text-base" : "text-2xl"}`}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70"
          title={title}
        >
          <FontAwesomeIcon icon={icon} width={small ? 16 : 22} />
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
