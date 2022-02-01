import type { AppProps } from "next/app";
import client from "../lib/apollo";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
