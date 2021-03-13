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

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

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
      </Head>
      {getLayout(<Component {...pageProps} />)}
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
