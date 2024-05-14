import Image from "next/image"
import { CertificationList } from "@/components/Certification"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { Metadata, Viewport } from "next"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import Construction from "@assets/construction.gif"

const Excuses = dynamic(() => import("@/components/Excuses"), {
  loading: () => <Skeleton className="w-full h-[48px]" />,
})

export const metadata: Metadata = {
  title: "Uses | Gus Fune",
  description: "e-commerce, tech and stuff...",
  creator: "Gus Fune",
  // icons: {
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
}

export const viewport: Viewport = {
  themeColor: "white",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function Page() {
  const apps = [
    {
      name: "Arc",
      url: "https://arc.net/gift/a5b15a5b",
      text: "I simply love this broswer. I'd pay for it",
    },
    {
      name: "1Password",
      url: "https://1password.com/",
      text: "sudo I am the network administrator, my voice is my password, verify me*",
    },
    {
      name: "Little Snitch",
      url: "https://www.obdev.at/products/littlesnitch/index.html",
      text: "for network blocking and privacy",
    },
    {
      name: "Magnet",
      url: "https://magnet.crowdcafe.com/",
      text: "for window management and snapping things nicely",
    },
    {
      name: "Numi",
      url: "https://numi.app/",
      text: 'better than your regular calculator. Useful for "the mathz"',
    },
    {
      name: "Pikka",
      url: "https://apps.apple.com/us/app/pikka-color-picker/id1195076754?mt=12",
      text: "for color picking everywhere",
    },
  ]

  const dev = [
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
      text: "is my editor of choice since 2017",
    },
    {
      name: "Dracula Pro",
      url: "https://draculatheme.com/",
      text: "is my theme everywhere. It's a great boost on productivity having all apps with the same color scheme",
    },
    {
      name: "Warp",
      url: "https://www.warp.dev/",
      text: "is my terminal of choice",
    },
    {
      name: "JetBrains Mono",
      url: "https://www.jetbrains.com/lp/mono/",
      text: "is my choice of font in editors and terminals",
    },
  ]

  return (
    <main className="space-y-8 max-w-2xl">
      <section id="intro">
        <h2 className="text-2xl">
          Hi, I&apos;m <strong>Gus Fune</strong>
        </h2>
        <p>And these are the stuff I use...</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Apps</h3>
        <ul className="space-y-2">
          {apps.map((item, i) => (
            <li key={`dev-item-${i}`}>
              <a
                href={item.url}
                target="_blank"
                className="underline hover:opacity-75"
              >
                <strong>{item.name}</strong> – {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Dev Tools</h3>
        <ul className="space-y-2">
          {dev.map((item, i) => (
            <li key={`dev-item-${i}`}>
              <a
                href={item.url}
                target="_blank"
                className="underline hover:opacity-75"
              >
                <strong>{item.name}</strong> – {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
