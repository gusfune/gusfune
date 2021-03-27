import { useQuery, Image } from "blitz"
import ContentLoader from "react-content-loader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"
import { faGlasses, faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
import Section from "app/core/components/Section"
import getProjects from "app/projects/queries/getProjects"
import { Project, ProjectLink } from "@prisma/client"

const ProjectLoaderItem = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={386}
    viewBox="0 0 260 386"
    backgroundColor="#e7e7e7"
    foregroundColor="#d6d6d6"
    className="w-full p-2"
    {...props}
  >
    <path d="M 0.5 0.5 h 259 v 127 H 0.5 z M 0.5 144.5 h 259 v 27 H 0.5 z M 0.5 188.5 h 259 v 79 H 0.5 z M 0.5 284.5 h 63 v 39 H 0.5 z M 0.5 340.5 h 129 v 39 H 0.5 z" />
  </ContentLoader>
)

const ProjectLoader = () => (
  <Section title="These are some selected projects from the last years that I'm really proud of">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <ProjectLoaderItem />
      <ProjectLoaderItem />
      <ProjectLoaderItem />
      <ProjectLoaderItem />
    </div>
  </Section>
)

interface ProjectLinkProps {
  url: string
  type: string
}

const ProjectLinkItem = ({ url, type }: ProjectLinkProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-base hover:opacity-50">
    <span className="sr-only">Link to {type}</span>
    <>
      {type === "android" && <FontAwesomeIcon icon={faAndroid} width="24" />}
      {type === "ios" && <FontAwesomeIcon icon={faApple} width="24" />}
      {type === "iot" && <FontAwesomeIcon icon={faGlasses} width="24" />}
      {type === "web" && <FontAwesomeIcon icon={faGlobeEurope} width="24" />}
    </>
  </a>
)

type ProjectUnitProps = {
  logo: string
  color: string
  title: string
  subtitle: string
  role: string
  year?: number | null
  links: ProjectLink[]
}

const ProjectUnit = ({ logo, color, title, subtitle, role, year, links }: ProjectUnitProps) => (
  <div className="p-2 transition-transform transform experience-unit hover:scale-105 hover:shadow-lg">
    <div
      className="relative w-full h-32 p-16 mb-2 bg-center bg-no-repeat rounded"
      style={{
        backgroundColor: color,
        borderColor: color,
        borderWidth: "16px",
      }}
    >
      {logo && (
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="p-8"
        />
      )}
    </div>
    {title && <div className="mb-2 text-lg font-semibold">{title}</div>}
    {subtitle && <div className="mb-2 text-sm font-light">{subtitle}</div>}
    {role && (
      <div className="text-sm font-light">
        <strong>Role:</strong> {role}
        <br />
        <strong>Year:</strong> {year || "current"}
        <br />
      </div>
    )}
    {links && (
      <div className="flex flex-row gap-3 my-2">
        {links.map((node) => (
          <ProjectLinkItem key={node.id} url={node.url} type={node.type} />
        ))}
      </div>
    )}
  </div>
)

type Props = {
  initialData: {
    projects: (Project & {
      Link: ProjectLink[]
    })[]
  }
}

const ProjectList = ({ initialData }: Props) => {
  const [{ projects }] = useQuery(getProjects, {}, { initialData })
  return (
    <Section title="These are some selected projects from the last years that I'm really proud of">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectUnit
            key={project.id}
            logo={project.logo}
            color={project.color}
            title={project.title}
            subtitle={project.subtitle}
            role={project.role}
            year={project.year}
            links={project.Link}
          />
        ))}
      </div>
    </Section>
  )
}

export { ProjectList, ProjectLoader }
