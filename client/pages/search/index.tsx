import Head from "next/head";
import { NextPage } from "next";
import { Container } from "../../styles/search";

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
