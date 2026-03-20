import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About",
}

export default function Page() {
  return (
    <div className="space-y-8 max-w-2xl">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">About</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2">
          <Image
            src="/GusFune2025-005-small.jpg"
            alt="Gus Fune"
            width={300}
            height={450}
            className="w-full mx-auto block"
          />
          <div className="space-y-2">
            <p>
              If you are here, you probably know something about me. I&#39;m
              Gus, a tech/business person that likes buinding things, and
              companies.
            </p>
            <p>
              I have no formal technical background, like a CS or engineering
              degree, but, I am &quot;self-taught&quot; or at least
              &quot;home-schooled&quot; into programming. I always had
              computers, internet and, watched my dad programming and asked a
              ton of annoying questions (or maybe I was raised as a Rubber Duck,
              who knows?).
            </p>
            <p>
              I&#39;ve bult a few companies, some did well, some didn&#39;t.
              Moved countries, twice, and in the last few years focused into
              e-commerce and retail.
            </p>
            <p className="font-light italic">
              *So if you didn&#39;t study CS or engineering, what did you do?
              Oh, I studied Advertising and Film Production in college. Later
              on, I did study game design and development and did an MBA. But,
              most of things I learned, were from hands-on experience.
            </p>
          </div>
        </div>
        <p className="mt-4">On the non-professional side:</p>
        <ul className="list-disc list-inside">
          <li>I&#39;m from Brasília, capital of Brazil 🇧🇷.</li>
          <li>
            I live in Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿, in the Kingdom of Fife with my wife and my
            cats Bilbo and Tabasco.
          </li>
          <li>I am an avid gamer 🕹️ and collector of Lego</li>
          <li>I also am a 1st kyu (brown belt) judoka 🥋.</li>
          <li>
            Also learning how to pilot (planes) and building up hours for a PPL
            ✈️
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight">Work</h2>
        <p>
          If you want a timeline of where I worked, you better check Linkedin
          for that. For the &quot;director&#39;s cut&quot;, here is the gist:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            2007: Co-founded{" "}
            <a href="https://papodehomem.com.br">Papo de Homem</a>, a magazine
            that over the years grow from 0 to 2.5 million readers. I was a
            partner and in charge of tech and media operations.
          </li>
          <li>
            2011: I started working as a freelancer for agencies and ended up
            starting my own development agency called{" "}
            <strong>Epic Awesome</strong>. Over the next years I managed to
            deliver hundreds of projects from all kinds of brands, from big and
            small. Check &quot;who I worked with&quot; section below for more
            details.
          </li>
          <li>
            2012: Worked as a freelance game journalist, writing for{" "}
            <a href="https://tecnoblog.net">Tecnoblog</a>, a big brazilian
            publication and covered new launches, events and conferences.
          </li>
          <li>
            2017: I joined <a href="https://wololo.tech">Wololo</a> as a
            Co-founder and CTO, raised a Pre-seed and got a product in the
            market.
          </li>
          <li>
            2019: Moved to Sweden where I was back at consulting for some local
            startups such as Memmo and Yepstr.
          </li>
          <li>
            2020: Co-founded <a href="https://offscript.io">Off-Script</a> and
            build an entire e-commerce marketplace from ground, was named one of
            the top startups of the year by Wired UK.
          </li>
          <li>
            2021: Moved to Scotland and joined Div Brands as CTO, and later as a
            Managing Partner as well. Been there making e-commerce amazing while
            scaling brands such as BÆRSkin.
          </li>
          <li>
            2024: In parallel to my work at Div Brands, I also became an
            ambassador for the{" "}
            <a href="https://machalliance.org/">MACH Alliance</a>
          </li>
          <li>
            2025: I was part of the first subject matter expert group that
            developed the certification for{" "}
            <a href="https://machalliance.org/mach-architect-certification">
              Certified MACH Architect Professional
            </a>
            .
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold tracking-tight">Selected work</h2>
        <p className="font-light">
          This is a work in progress, some more stuff will be added later on.
        </p>
        <p>
          Over the years I managed to work with a ton of cool brands and
          companies. Here are a few companies from my selection:
        </p>
        <ul className="flex flex-row shrink-0 flex-wrap gap-2 font-light">
          <li>3M</li>
          <li>Absolut Vodka</li>
          <li>AmBev</li>
          <li>Behold Studios</li>
          <li>BMW</li>
          <li>Bradesco</li>
          <li>Citibank</li>
          <li>FIAT</li>
          <li>GOL Airlines</li>
          <li>Government of Brazil</li>
          <li>Grupo Pão de Acúcar</li>
          <li>HBO</li>
          <li>Heineken</li>
          <li>Huawei</li>
          <li>Jack Daniels</li>
          <li>John Deere</li>
          <li>L’Occitane Cosmetics</li>
          <li>McDonald&#39;s</li>
          <li>MINI</li>
          <li>Motorola</li>
          <li>Nestlé</li>
          <li>Peugeot</li>
          <li>Rogue Snail</li>
          <li>Scania</li>
          <li>The Coca-Cola Company</li>
          <li>Volkswagen</li>
          <li>WWF</li>
          <li>Xiaomi</li>
        </ul>
      </section>
    </div>
  )
}
