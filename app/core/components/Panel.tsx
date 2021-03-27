import { ReactNode } from "react"

type Props = {
  head?: ReactNode
  children: ReactNode
}

const Panel = ({ head, children }: Props) => (
  <div className="overflow-hidden text-black bg-white divide-y divide-gray-200 shadow sm:rounded-lg">
    {head && <header className="px-4 py-5 sm:px-6">{head}</header>}
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </div>
)

export default Panel
