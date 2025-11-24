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
      name: "Raycast",
      url: "https://www.raycast.com/",
      text: "replacement for spotlight with superpowers",
    },
    {
      name: "Superhuman",
      url: "https://superhuman.com/refer/zh9hjjcy",
      text: "saves me a ton of hours with emailing",
    },
    {
      name: "Granola",
      url: "https://www.granola.so/",
      text: "AI-powered note taking for meetings and calls",
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
    {
      name: "Claude Code",
      url: "https://claude.com/product/claude-code",
      text: "you are absolutely right!",
    },
  ]

  const hardware = [
    {
      name: '2x ASUS ProArt Display PA329CV Professional Monitor 32"',
      text: "dual 32-inch professional monitors for design and development work",
    },
    {
      name: 'Macbook M4 Pro 16"',
      text: "my main development machine",
    },
    {
      name: "Herman Miller Flo X Large Dual Monitor Arm",
      text: "for optimal monitor positioning and desk space",
    },
    {
      name: "Fuller Standing Desk",
      text: "height-adjustable desk for better ergonomics",
    },
    {
      name: "Logitech MX Vertical",
      text: "ergonomic vertical mouse for better wrist positioning",
    },
    {
      name: "Keyboard Keycron Q6 MAX with custom Red and Blue Gatreon switches specially positioned",
      text: "custom mechanical keyboard with strategically placed switches",
    },
    {
      name: "Herman Miller Aeron chair",
      text: "ergonomic office chair for long coding sessions",
    },
    {
      name: "Upsy Desk modifier to remote control desk",
      text: "remote control upgrade for standing desk automation",
    },
    {
      name: "Insta360 Link camera",
      text: "AI-powered webcam for video calls and streaming",
    },
    {
      name: "PreSonus Eris 3.5BT Gen 2 Studio Monitor",
      text: "professional studio monitors for audio quality",
    },
    {
      name: "Belkin Thunderbolt 4 Dock Pro",
      text: "high-performance docking station for connectivity",
    },
    {
      name: "Elgato Stream Deck Neo",
      text: "customizable control pad for shortcuts and automation",
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

      <section>
        <h3 className="text-xl font-semibold mb-2">Hardware</h3>
        <ul className="space-y-2">
          {hardware.map((item, i) => (
            <li key={`hardware-item-${i}`}>
              <strong>{item.name}</strong> – {item.text}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
