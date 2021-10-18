import Section from "components/Section"
import {
  GetRecommendationsQuery,
  useGetRecommendationsQuery,
} from "lib/graphql"
import { client } from "lib/graphql-client"
import { RecommendationItem } from "./Item"
import { ReadMore } from "./ReadMore"
import { RecommendationLoader } from "./Loader"

interface Props {
  initialData?: GetRecommendationsQuery | null
}

const RecommendationList = ({ initialData }: Props) => {
  const { data, isLoading } =
    useGetRecommendationsQuery<GetRecommendationsQuery>(
      client,
      {},
      {
        initialData: initialData ?? undefined,
      }
    )
  if (isLoading || !data) {
    return <RecommendationLoader />
  }
  return (
    <Section title="This is what some people said about working with me">
      {data &&
        data.recommendations &&
        data.recommendations.map((recommendation) => (
          <RecommendationItem
            id={recommendation.id}
            key={recommendation.id}
            photo={recommendation.photo}
            name={recommendation.name}
            title={recommendation.title as string}
            content={recommendation.content}
          />
        ))}
      <ReadMore />
    </Section>
  )
}

export default RecommendationList
export { RecommendationList }
