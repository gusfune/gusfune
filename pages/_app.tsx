import "../styles/globals.css"
import "typeface-open-sans"
import { useState } from "react"
import Head from "next/head"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { useCookies } from "react-cookie"
import * as snippet from "@segment/snippet"
import CookieConsent from "components/CookieConsent"

const client = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [cookies, _setCookie] = useCookies(["consent"])
  const [cookieConsent, setCookieConsent] = useState(Boolean(cookies.consent))

  const renderSnippet = () => {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
      page: true,
    }
    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts)
    }
    return snippet.min(opts)
  }

  return (
    <QueryClientProvider client={client}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=6.0,user-scalable=0"
        />
        {cookieConsent && (
          <script
            dangerouslySetInnerHTML={{ __html: renderSnippet() }}
            key="segment"
          />
        )}
      </Head>
      <Component {...pageProps} />
      <CookieConsent />
    </QueryClientProvider>
  )
}

export default MyApp
