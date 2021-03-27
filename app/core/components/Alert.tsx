import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

const Alert = ({ message }: { message: string }) => (
  <div className="p-4 my-2 rounded-md bg-red-50" role="alert">
    <div className="flex">
      <div className="flex-shrink-0">
        <FontAwesomeIcon icon={faExclamationCircle} width={20} className="w-5 h-5 text-red-400" />
      </div>
      <div className="flex-1 ml-3 md:flex md:justify-between">
        <p className="text-sm text-red-700">{message}</p>
      </div>
    </div>
  </div>
)

export default Alert
