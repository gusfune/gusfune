interface Props {
  link: string
  title: string
}

const LinkItem = ({ link, title }: Props) => (
  <a
    href={link}
    className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group hover:bg-gray-50 hover:text-gray-900"
    aria-current="page"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="truncate">{title}</span>
  </a>
)

export { LinkItem }
export default LinkItem
