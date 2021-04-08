import { BlitzPage } from "blitz"
import { NextSeo } from "next-seo"
import ReactMarkdown from "react-markdown"
import Layout from "app/core/layouts/Layout"
import { useDarkMode } from "app/core/components/DarkMode"
import MeHat from "app/core/components/MeHat"
import Panel from "app/core/components/Panel"

const letter = `
  > Dear person,
  >
  > I hope this message finds you well. I have been doing some research and 95% of canned messages I receive follow this same structure. Sometimes you might add some vague compliments just to try to hook me up.
  >
  > You are probably a leading IT firm based in a country known for cheap labor and loose regulation, but you call it cost-effective or competitive. You are very liberal with hyperboles and the promise seems to be good to be true. You will tell me about success stories about some generic companies. It always includes a local telecom company.
  >
  > Sometimes you detail your stack, which is a wide range of non-connecting things, or you add a bunch of hype words in hopes someone will fall for that. AR, VR, Gamification, Big data, the cloud, the works!
  >
  > And to wrap up, you mention you have an office in a country in the EU or the US so you can be closer to the client, but with no regard to your developers working during night shifts. And you really want an answer to set up a meeting ASAP.
  >
  > Sincerely,
  >
  > Someone

  –

  ## Does that sound familiar?
  Yes, I get a bunch of this every day. Sometimes the same email comes to my personal and business address at the same time. Sometimes the person sends a whole chain of emails in a desperate attempt to call for attention.

  This won't work. If you sent a message like that, it's time for a reflection.


  ## Why your offer isn't appealing?
  A lot of people will fall for the "very cheap labor" fallacy, but we all know that this low price comes at another cost. Developers will be working under stress, with long journeys and low wage. Sometimes a low wage in a country means a livable wage in another country, but let's face the fact that a company charging less than US$ 15/ hour, a developer will get a small chunk of that.

  And finally, most critical outsourcing sales come from recommendations. No sane manager will ever hire a company that they met through soliciting.


  ## Why are you over reacting of an innocent e-mail marketing?
  E-mail marketing assumes there was a clear opt-in. If you are sending a message that was unsolicited for, that is spam. The definition of spam is straight-forward:

  > Unsolicited e-mail, often of a commercial nature, sent indiscriminately to multiple mailing lists, individuals, or newsgroups; junk e-mail.

  Source: [The American Heritage® Dictionary of the English Language, 5th Edition, extracted from Wordnik](https://www.wordnik.com/words/spam).

  People need to start treating e-mail inboxes with more respect. Would you like people showing at your doorstep talking about their services? Now imagine dozes of people everyday ringing your door bell. It's not because it's not a physical space that the rules of good sense are not applicable anymore.


  ## Can I use this message?

  Yes!

`

const Spam: BlitzPage = () => {
  const { darkMode } = useDarkMode()
  return (
    <div className={`w-full container my-8 ${darkMode ? "dark" : "light"}`}>
      <NextSeo
        title="SPAM | Gus Fune"
        description="An open letter to service providers"
        canonical="https://gusfune.com/spam"
        twitter={{
          handle: "@gusfune",
          cardType: "summary_large_image",
        }}
      />
      <div className="md:mt-10">
        <MeHat />
      </div>
      <p className="px-4 my-8 text-center">
        This canned message counters SPAM messages. It's super effective.
      </p>
      <div className="grid grid-cols-1 gap-8">
        <Panel>
          <ReactMarkdown className="markdown">{letter}</ReactMarkdown>
        </Panel>
      </div>
    </div>
  )
}

Spam.suppressFirstRenderFlicker = true
Spam.getLayout = (page) => (
  <Layout
    title="A letter to spammers"
    breadcrumbs={[{ name: "A letter to spammers", link: "/spam" }]}
  >
    {page}
  </Layout>
)

export default Spam
