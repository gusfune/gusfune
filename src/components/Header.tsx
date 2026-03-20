import Image from "next/image"
import ShineBorder from "./magic-ui/shine-border"

export const Header = () => {
  return (
    <header className="flex flex-row sm:flex-col justify-center items-center gap-4 p-2 sm:p-0">
      <Image
        src="/GusFune2025-004-small.jpg"
        alt="Gus Fune"
        width={128}
        height={128}
        className="rounded-full mx-auto block w-10 h-10 sm:hidden"
      />
      <ShineBorder
        borderRadius={9999}
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={1}
        className="hidden sm:block"
      >
        <Image
          src="/GusFune2025-004-small.jpg"
          alt="Gus Fune"
          width={128}
          height={128}
          className="rounded-full w-full mx-auto block sm:max-w-full"
        />
      </ShineBorder>
      <h1 className="uppercase font-extrabold text-lg md:text-base lg:text-lg tracking-widest">
        Gus Fune
      </h1>
    </header>
  )
}
