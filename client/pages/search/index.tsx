import Head from "next/head";
import { NextPage } from "next";
import { Container } from "../../styles/search";
import { useQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "../../queries";
import { FormEvent, useState } from "react";

const Search: NextPage = () => {
  const [value, setValue] = useState("");
  const { data } = useQuery(SEARCH_MOVIES, {
    variables: value,
  });

  return (
    <div>
      <Head>
        <title>Search Movies</title>
      </Head>
      <Container></Container>
    </div>
  );
};

export default Search;
