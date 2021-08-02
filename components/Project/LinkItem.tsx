import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"
import { faGlasses, faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
import { LinkBaseFragment } from "lib/graphql"

const ProjectLinkItem = ({ url, type }: LinkBaseFragment) => {
  let icon
  switch (type) {
    case "Android":
      icon = faAndroid
      break
    case "iOS":
      icon = faApple
      break
    case "IoT":
      icon = faGlasses
      break
    case "Web":
    default:
      icon = faGlobeEurope
      break
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base hover:opacity-50"
    >
      <span className="sr-only">Link to {type}</span>
      <FontAwesomeIcon icon={icon} width="24" />
    </a>
  )
}

export default ProjectLinkItem
export { ProjectLinkItem }
