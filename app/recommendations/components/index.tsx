import ContentLoader from "react-content-loader"
import Section from "app/core/components/Section"
import { useQuery, Image } from "blitz"
import getRecommendations from "app/recommendations/queries/getRecommendations"

const RecommendationLoaderItem = (props) => (
  <ContentLoader
    speed={2}
    width={550}
    height={224}
    viewBox="0 0 550 224"
    backgroundColor="#e7e7e7"
    foregroundColor="#d6d6d6"
    className="w-full p-2"
    {...props}
  >
    <circle cx="61" cy="61" r="61" />
    <path d="M 146.5 0.5 h 121 v 27 h -121 z M 146.5 36.5 h 121 v 23 h -121 z M 146.5 68.5 h 403 v 155 h -403 z" />
  </ContentLoader>
)

const RecommendationLoader = () => (
  <Section title="This is what some people said about working with me">
    <RecommendationLoaderItem />
    <RecommendationLoaderItem />
    <RecommendationLoaderItem />
    <p className="mt-8 text-center">
      <a
        href="https://www.linkedin.com/in/gusfune/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-white bg-black rounded hover:underline"
      >
        Want to read more? Check my Linkedin
      </a>
    </p>
  </Section>
)

interface RecommendationUnitProps {
  id: number
  photo: string
  name: string
  title: string
  content: string
}

const RecommendationUnit = ({ id, photo, name, title, content }: RecommendationUnitProps) => (
  <article className="flex flex-row" id={`recommendation-${id.toString()}`}>
    <div className="w-3/12 p-2 lg:w-1/12">
      <Image src={photo} alt={name} width={180} height={180} className="rounded-full" />
    </div>
    <div className="w-9/12 p-2 lg:w-11/12">
      <h2 className="text-lg font-semibold">{name}</h2>
      <h4 className="my-1">{title}</h4>
      <div className="my-1 font-thin subtitle">&ldquo;{content}&rdquo;</div>
    </div>
  </article>
)

const RecommendationList = () => {
  const [{ recommendations }] = useQuery(getRecommendations, {
    orderBy: { id: "asc" },
  })
  return (
    <Section title="This is what some people said about working with me">
      {recommendations.map((recommendation) => (
        <RecommendationUnit
          id={recommendation.id}
          key={recommendation.id}
          photo={recommendation.photo}
          name={recommendation.name}
          title={recommendation.title}
          content={recommendation.content}
        />
      ))}
      <p className="mt-8 text-center">
        <a
          href="https://www.linkedin.com/in/gusfune/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-black rounded hover:underline"
        >
          Want to read more? Check my Linkedin
        </a>
      </p>
    </Section>
  )
}

export { RecommendationList, RecommendationLoader }
