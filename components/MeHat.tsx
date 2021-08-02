import Image from "next/image"
import { Links } from "components/Links"

const MeHat = () => (
  <header className="flex flex-row items-center justify-center gap-4 align-middle">
    <div className="flex text-center">
      <Image
        src="/gusfune.jpg"
        alt="Gus Fune"
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
    <div>
      <h1 className="text-xl font-semibold">Gus Fune</h1>
      <p className="mb-2">
        CTO @{" "}
        <a
          href="https://offscript.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline dark:text-dracula-yellow"
        >
          Off Script
        </a>
        .
      </p>
      <Links small />
    </div>
  </header>
)

export default MeHat
