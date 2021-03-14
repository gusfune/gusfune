import { dynamic } from "blitz"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faMedium,
  faSteam,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
const DarkModeToggle = dynamic(
  () => import("app/core/components/DarkMode").then((mod) => mod.DarkModeToggle),
  {
    ssr: false,
  }
)

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

const Links = () => (
  <div id="sidebar-links">
    <div className="flex flex-row justify-between">
      <ul className="flex flex-row justify-start mb-4">
        {destinations.map((item, i) => (
          <li key={i} className="inline-block mr-4 text-2xl">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon icon={item.icon} width="22" />
            </a>
          </li>
        ))}
      </ul>
      <DarkModeToggle />
    </div>
    <div className="text-xs">
      Built with{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>
      &nbsp; using{" "}
      <a
        href="https://blitzjs.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        BlitzJS
      </a>
      , full source code{" "}
      <a
        href="https://github.com/gusfune/gusfune.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        available here
      </a>
      .
    </div>
  </div>
)

export default Links
