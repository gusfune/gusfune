import { ReactNode, AriaRole } from "react"

interface Props {
  head?: ReactNode
  children: ReactNode
  role?: AriaRole
}

const Panel = ({ head, children, role }: Props) => (
  <div
    className="overflow-hidden text-black bg-white divide-y divide-gray-200 shadow sm:rounded-lg"
    role={role}
  >
    {head && <div className="px-4 py-5 sm:px-6">{head}</div>}
    <article className="px-4 py-5 sm:p-6">{children}</article>
  </div>
)

export default Panel
