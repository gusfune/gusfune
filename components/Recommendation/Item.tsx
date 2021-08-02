import Image from "next/image"
import { Asset, Recommendation } from "lib/graphql"

type Props = Pick<Recommendation, "id" | "title" | "name" | "content"> & {
  photo: { __typename?: "Asset" } & Pick<Asset, "url">
}

const RecommendationItem = ({ id, photo, name, title, content }: Props) => (
  <article
    className="flex flex-row transition-transform transform hover:scale-105 hover:shadow-lg"
    id={`recommendation-${id.toString()}`}
  >
    <div className="w-3/12 p-2 lg:w-1/12">
      {photo && photo.url && (
        <Image
          src={photo.url}
          alt={name}
          width={180}
          height={180}
          className="rounded-full"
        />
      )}
    </div>
    <div className="w-9/12 p-2 lg:w-11/12">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="my-1">{title}</p>
      <p className="my-1 font-thin subtitle">&ldquo;{content}&rdquo;</p>
    </div>
  </article>
)

export default RecommendationItem
export { RecommendationItem }
