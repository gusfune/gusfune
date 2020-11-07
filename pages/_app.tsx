import { AppProps } from "next/app"
import Head from "next/head"
import "typeface-open-sans"
import "styles/globals.css"
import { browserEnv } from "lib/browserEnv"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: browserEnv.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
