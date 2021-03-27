/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import {
  AppProps,
  AuthorizationError,
  ErrorComponent,
  ErrorFallbackProps,
  Head,
  useRouter,
} from "blitz"
import { ErrorBoundary } from "react-error-boundary"
import { queryCache } from "react-query"
import "typeface-open-sans"
import "app/core/styles/index.css"
import * as snippet from "@segment/snippet"
import { useCookies } from "react-cookie"
import CookieConsent from "app/core/components/CookieConsent"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
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
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      resetKeys={[router.asPath]}
      onReset={() => {
        // This ensures the Blitz useQuery hooks will automatically refetch
        // data any time you reset the error boundary
        queryCache.resetErrorBoundaries()
      }}
    >
      <Head>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=6.0,user-scalable=0"
        />
        {cookieConsent && (
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} key="segment" />
        )}
      </Head>
      {getLayout(
        <>
          <Component {...pageProps} />
          <CookieConsent />
        </>
      )}
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
