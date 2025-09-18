import Image from "next/image"
import ShineBorder from "./magic-ui/shine-border"

export const Header = () => {
  return (
    <header className="flex flex-row sm:flex-col justify-center items-center gap-4 p-2 sm:p-0">
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
          className="rounded-full w-full mx-auto block min-w-[64px] max-w-[64px] sm:max-w-full"
        />
      </ShineBorder>
      <h1 className="uppercase font-semibold text-lg md:text-base lg:text-lg">
        Gus Fune
      </h1>
    </header>
  )
}
