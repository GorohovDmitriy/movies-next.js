import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Home Movies</title>
      </Head>

      <h1>Hello movie App</h1>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
