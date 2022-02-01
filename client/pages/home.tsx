import Head from "next/head";
import styled from "styled-components";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Movies</title>
      </Head>
      <Container>Home</Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  margin-top: 2rem;
  background-color: #262d4d;
  opacity: 0.5;
  border-radius: 10px;
  height: calc(100vh - 70px);
`;
