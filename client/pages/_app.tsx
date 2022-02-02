import type { AppProps } from "next/app";
import Head from "next/head";
import client from "../lib/apollo";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
