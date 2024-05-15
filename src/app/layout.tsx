import { Source_Code_Pro, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils"
import { Header } from "@/components/Header"
import { Nav } from "@/components/Nav"

const source = Source_Sans_3({ subsets: ["latin"] })
const code = Source_Code_Pro({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={source.className}>
        <div className="grid grid-cols-12 p-4 gap-4">
          <div className="static col-span-12 sm:col-span-2">
            <div
              className={cn(
                "sm:fixed sm:top-8 sm:left-0 sm:w-2/12 w-full text-center flex flex-row sm:flex-col gap-4 justify-between items-center sm:justify-start sm:items-center",
                code.className
              )}
            >
              <Header />
              <Nav />
            </div>
          </div>
          <main className="col-span-12 sm:col-span-10 p-4">{children}</main>
        </div>

        <p className="text-xs text-center my-4">
          Copyright &copy; 2024 - Gus Fune. All rights reserved
          <br />
          Source-code for this site is published under MIT license. You&apos;re
          free to use the code, not the content.
          <br />
          Construction Gif is borrowed from{" "}
          <a
            href="http://textfiles.com/underconstruction/"
            className="underline"
          >
            textfiles.com
          </a>
          . All stuff that have owners, are owned by their owners, the ones that
          are free, are part of the collective mind.
        </p>
      </body>
    </html>
  )
}
