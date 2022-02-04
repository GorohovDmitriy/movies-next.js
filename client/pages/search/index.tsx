import Head from "next/head";
import { NextPage } from "next";
import { Container, Form, Input, Title } from "../../styles/search";
import { useQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "../../queries";
import { FormEvent, useState } from "react";
import Content from "../../components/Content";

const Search: NextPage = () => {
  const [value, setValue] = useState("");
  const { data } = useQuery(SEARCH_MOVIES, {
    variables: {
      title: value,
    },
  });
  const movies = data?.searchMovies?.results;

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <Head>
        <title>Search Movies</title>
      </Head>

      <Container>
        <Title>Enter movie name</Title>
        <Form>
          <Input
            value={value}
            onChange={changeHandler}
            placeholder="Enter name movie"
          />
        </Form>
      </Container>
      {movies && <Content path='/search' title="Found films" movies={movies} />}
    </div>
  );
};

export default Search;
