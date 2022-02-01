import Head from "next/head";
import { NextPage } from "next";
import { Container } from "../styles/home";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home Movies</title>
    </Head>
    <Container>Home</Container>
  </div>
);

export default Home;
