import Head from "next/head";
import styled from "styled-components";
import { NextPage } from "next";

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Search Movies</title>
      </Head>
      <Container>Search</Container>
    </div>
  );
};

export default Search;

const Container = styled.div`
  margin-top: 2rem;
  background-color: #262d4d;
  opacity: 0.5;
  border-radius: 10px;
  height: calc(100vh - 70px);
`;
