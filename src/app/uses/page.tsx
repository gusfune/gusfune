import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uses",
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
      name: "Notion",
      url: "https://www.notion.com/",
      text: "notes, meeting write-ups and the calendar. It replaced Granola for me",
    },
    {
      name: "Doppler",
      url: "https://www.doppler.com/",
      text: "every secret lives here. No .env files on my machines",
    },
  ]

  const dev = [
    {
      name: "Zed",
      url: "https://zed.dev/",
      text: "is my editor now, and my $EDITOR. I kept the VS Code keymap, because muscle memory is a hard thing to argue with",
    },
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
      text: "was the editor of choice from 2017 and is still installed. Some jobs still want it",
    },
    {
      name: "Ghostty",
      url: "https://ghostty.org/",
      text: "replaced Warp as my terminal. It is fast, it is boring, and it starts before I finish letting go of the hotkey",
    },
    {
      name: "mise",
      url: "https://mise.jdx.dev/",
      text: "one tool to manage every runtime. It retired nvm and rbenv on the same afternoon and I did not miss either",
    },
    {
      name: "Bun",
      url: "https://bun.sh/",
      text: "is the default runtime and package manager for anything new I start",
    },
    {
      name: "Dracula Pro",
      url: "https://draculatheme.com/pro",
      text: "Van Helsing flavour, everywhere. Editor, terminal, shell, window manager. Same colours on every screen is a real productivity boost",
    },
    {
      name: "JetBrains Mono",
      url: "https://www.jetbrains.com/lp/mono/",
      text: "is my font in the editor, with Hack Nerd Font in the terminal for the glyphs",
    },
    {
      name: "Claude Code",
      url: "https://claude.com/product/claude-code",
      text: "you are absolutely right!",
    },
    {
      name: "lazygit",
      url: "https://github.com/jesseduffield/lazygit",
      text: "for everything git that is not a one-line command",
    },
    {
      name: "Atuin",
      url: "https://atuin.sh/",
      text: "shell history that syncs between machines and is actually searchable",
    },
  ]

  const machines = [
    {
      name: 'Macbook M4 Pro 16"',
      text: "macOS, my daily driver, and where the paid work happens",
    },
    {
      name: "Omarchy",
      url: "https://omarchy.org/",
      text: "Arch Linux with Hyprland, as a backup machine and an experiment. Same dotfiles branch as the Mac, same Dracula Pro theme, a fraction of the RAM",
    },
  ]

  const hardware = [
    {
      name: '2x ASUS ProArt Display PA329CV Professional Monitor 32"',
      text: "dual 32-inch professional monitors for design and development work",
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
      name: "Upsy Desk modifier to remote control desk",
      text: "remote control upgrade for standing desk automation",
    },
    {
      name: "Herman Miller Aeron chair",
      text: "ergonomic office chair for long coding sessions",
    },
    {
      name: "Keyboard Keycron Q6 MAX with custom Red and Blue Gatreon switches specially positioned",
      text: "custom mechanical keyboard with strategically placed switches",
    },
    {
      name: "Logitech MX Vertical",
      text: "ergonomic vertical mouse for better wrist positioning",
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
    <div className="space-y-12 max-w-2xl">
      <section id="intro">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Hi, I&apos;m Gus Fune
        </h2>
        <p>And these are the stuff I use...</p>
      </section>

      <section>
        <h3 className="text-2xl font-bold tracking-tight mb-3">Apps</h3>
        <ul className="space-y-2">
          {apps.map((item, i) => (
            <li key={`apps-item-${i}`}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
              >
                <strong>{item.name}</strong> – {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold tracking-tight mb-3">Dev Tools</h3>
        <ul className="space-y-2">
          {dev.map((item, i) => (
            <li key={`dev-item-${i}`}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-75"
              >
                <strong>{item.name}</strong> – {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold tracking-tight mb-3">Machines</h3>
        <p className="mb-3 font-light">
          Both machines run off{" "}
          <a
            href="https://github.com/gusfune/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-75"
          >
            the same dotfiles branch
          </a>
          . One clone, one setup script, two very different computers.
        </p>
        <ul className="space-y-2">
          {machines.map((item, i) => (
            <li key={`machines-item-${i}`}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-75"
                >
                  <strong>{item.name}</strong> – {item.text}
                </a>
              ) : (
                <>
                  <strong>{item.name}</strong> – {item.text}
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold tracking-tight mb-3">Hardware</h3>
        <ul className="space-y-2">
          {hardware.map((item, i) => (
            <li key={`hardware-item-${i}`}>
              <strong>{item.name}</strong> – {item.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
