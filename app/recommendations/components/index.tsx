import ContentLoader from "react-content-loader"
import Section from "app/core/components/Section"
import { usePaginatedQuery, Image } from "blitz"
import getRecommendations from "app/recommendations/queries/getRecommendations"

const RecommendationLoaderItem = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    uniqueKey="recommend"
    className="w-full"
    {...props}
  >
    <rect x="72" y="0" rx="3" ry="3" width="88" height="10" />
    <rect x="72" y="18" rx="3" ry="3" width="52" height="8" />
    <rect x="72" y="36" rx="3" ry="3" width="410" height="8" />
    <rect x="72" y="52" rx="3" ry="3" width="380" height="8" />
    <rect x="72" y="68" rx="3" ry="3" width="178" height="8" />
    <circle cx="26" cy="26" r="26" />
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
  const [{ recommendations }] = usePaginatedQuery(getRecommendations, {
    orderBy: { id: "asc" },
    skip: 0,
    take: 10,
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
