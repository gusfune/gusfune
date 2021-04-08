import { Document, Html, Head, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"
import * as snippet from "@segment/snippet"
import { CookiesProvider } from "react-cookie"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }
  renderSnippet() {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    }

    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }
  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <Head>
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <CookiesProvider>
            <Main />
            <BlitzScript />
          </CookiesProvider>
        </body>
      </Html>
    )
  }
}

export default MyDocument
