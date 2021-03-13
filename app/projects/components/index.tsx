import { usePaginatedQuery } from "blitz"
import ContentLoader from "react-content-loader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"
import { faGlasses, faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
import Section from "app/core/components/Section"
import getProjects from "app/projects/queries/getProjects"

const ProjectLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="128" height="128" />
    <rect x="0" y="134" rx="0" ry="0" width="128" height="16" />
    <rect x="0" y="156" rx="0" ry="0" width="128" height="8" />
    <rect x="0" y="170" rx="0" ry="0" width="128" height="8" />
    <rect x="0" y="184" rx="0" ry="0" width="128" height="8" />
  </ContentLoader>
)

interface ProjectLinkProps {
  url: string
  type: string
}

const ProjectLink = ({ url, type }: ProjectLinkProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-base hover:opacity-50">
    <>
      {type === "android" && <FontAwesomeIcon icon={faAndroid} width="24" />}
      {type === "ios" && <FontAwesomeIcon icon={faApple} width="24" />}
      {type === "iot" && <FontAwesomeIcon icon={faGlasses} width="24" />}
      {type === "web" && <FontAwesomeIcon icon={faGlobeEurope} width="24" />}
    </>
  </a>
)

interface ProjectUnitProps {
  logo: string
  color: string
  title: string
  subtitle: string
  role: string
  year: number
  //links: Links[]
  links: any[]
}

const ProjectUnit = ({ logo, color, title, subtitle, role, year, links }: ProjectUnitProps) => {
  return (
    <div className="p-2 experience-unit col-xs-12 col-sm-6 col-md-3">
      <div
        className="w-full h-32 mb-2 bg-center bg-no-repeat border rounded image"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundColor: color,
          backgroundSize: "calc(100% - 80px)",
        }}
      />
      {title && <div className="mb-2 text-lg font-semibold">{title}</div>}
      {subtitle && <div className="mb-2 text-sm font-light">{subtitle}</div>}
      {role && year && (
        <div className="text-sm font-light">
          <strong>Role:</strong> {role}
          <br />
          <strong>Year:</strong> {year}
          <br />
        </div>
      )}
      {links && (
        <div className="flex flex-row gap-3 my-2">
          {links.map((node) => (
            <ProjectLink key={node.id} url={node.url} type={node.type} />
          ))}
        </div>
      )}
    </div>
  )
}

const ITEMS_PER_PAGE = 10

const ProjectList = () => {
  const [{ projects }] = usePaginatedQuery(getProjects, {
    orderBy: { id: "asc" },
    skip: 0,
    take: ITEMS_PER_PAGE,
  })
  console.log(projects)
  return (
    <Section title="These are some selected projects from the last years that I'm really proud of">
      <div className="grid grid-cols-2 lg:grid-cols-4">
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
