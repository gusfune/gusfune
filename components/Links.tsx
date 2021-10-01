import Image from "next/image"
import Footnotes from "components/Footnotes"
import faGithub from "../public/icons/github-brands.svg"
import faTwitter from "../public/icons/twitter-brands.svg"
import faLinkedin from "../public/icons/linkedin-brands.svg"
import faMedium from "../public/icons/medium-brands.svg"

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
          <Image
            src={icon as StaticImageData}
            layout="intrinsic"
            alt={title}
            width={small ? 16 : 22}
            height={small ? 16 : 22}
          />
        </a>
      </li>
    ))}
  </ul>
)

const LinksSidebar = () => (
  <div id="sidebar-links">
    <div className="flex flex-row justify-between">
      <Links />
    </div>
    <Footnotes />
  </div>
)

export { Links, LinksSidebar }
