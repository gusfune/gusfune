import Image from "next/image"

export const Header = () => {
  return (
    <header className="flex flex-row sm:flex-col justify-center items-center gap-4 ">
      <Image
        src="/photo.jpg"
        alt="Gus Fune"
        width={128}
        height={128}
        className="rounded-full w-full mx-auto block min-w-[64px] max-w-[64px] sm:max-w-full"
      />
      <h1 className="uppercase font-semibold text-lg md:text-base lg:text-lg">
        Gus Fune
      </h1>
    </header>
  )
}
