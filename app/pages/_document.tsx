import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"
import { CookiesProvider } from "react-cookie"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }
  render() {
    return (
      <Html lang="en">
        <DocumentHead />
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
