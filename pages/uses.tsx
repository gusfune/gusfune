import { NextSeo } from "next-seo"
import ReactMarkdown from "react-markdown"
import Layout from "components/Layout"
import MeHat from "components/MeHat"
import Panel from "components/Panel"

const terminal = `
  - [Visual Studio Code](https://code.visualstudio.com/) is my editor of choice since 2017. Before that I used [Atom](https://atom.io/) for a while and [Coda](https://www.panic.com/coda/), now called Nova, for over a decade.
  - [Dracula Pro](https://draculatheme.com/) is my theme **everywhere**. It's a great boost on productivity having all apps with the same color scheme.
  - [Hyper](https://hyper.is/) is my terminal of choice. Before that I used [iTerm 2](https://iterm2.com/) for a long while.
  - [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) is the main browser I use when working on something. Regular firefox for daily browsing and everything is synced with iOS and iPad.
  - [JetBrains Mono](https://www.jetbrains.com/lp/mono/) is my choice of font in editors and terminals.
`

const apps = `
  - [1Password](https://1password.com/) for password management.
  - [Alfred](https://www.alfredapp.com/) is a big time-saver, especially with a bunch of workflows and the powerpack added on top of it.
  - [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) for network blocking and privacy.
  - [Magnet](https://magnet.crowdcafe.com/) for window management and snapping things nicely.
  - [Micro Snitch](https://www.obdev.at/products/microsnitch/index.html) for extra layer of privacy.
  - [Numi](https://numi.app/) is the calculator. Also integrated with Alfred.
  - [Pikka](https://apps.apple.com/us/app/pikka-color-picker/id1195076754?mt=12) for color picking everywhere.
  - [Sketch](https://www.sketch.com/) is my preferable editor, even though we use [Figma](figma.com/) at Off Script.
`

const UsesPage = () => {
  return (
    <Layout title="Uses">
      <div className="container w-full my-8">
        <NextSeo
          title="Gus Fune"
          description="Here are the tools I use for my projects."
          canonical="https://gusfune.com/hey"
        />
        <div className="md:mt-10">
          <MeHat />
        </div>
        <p className="px-4 my-8 text-center" role="contentinfo">
          Here are the tools I use for my projects.
          <br />
          This page was inspired by{" "}
          <a
            href="https://uses.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline dark:text-dracula-yellow"
          >
            uses.tech
          </a>
          .
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2" role="main">
          <Panel head={<h2 className="font-semibold">Editor + Terminal</h2>}>
            <ReactMarkdown className="markdown">{terminal}</ReactMarkdown>
          </Panel>
          <Panel head={<h2 className="font-semibold">Desktop apps</h2>}>
            <ReactMarkdown className="markdown">{apps}</ReactMarkdown>
          </Panel>
        </div>
      </div>
    </Layout>
  )
}

export default UsesPage
