import Head from "next/head";
import Content from "../../components/Content";
import { NextPage } from "next";
import { Container, Form, Input, Title } from "../../styles/search";
import { useQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "../../queries";
import { FormEvent, useState } from "react";
import { WebsiteUrls } from "../../types/enums";
import { IMovieSearch } from "../../types/movies";

const Search: NextPage = () => {
  const [value, setValue] = useState("");
  const { data, fetchMore } = useQuery<IMovieSearch>(SEARCH_MOVIES, {
    variables: {
      title: value,
    },
  });
  const movies = data?.searchMovies?.results;

  const scrollHandler = () => {
    const pages = data?.searchMovies?.page;
    fetchMore({
      variables: { page: Number(pages) + 1 },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.searchMovies.results = [
          ...prevResult.searchMovies.results,
          ...fetchMoreResult.searchMovies.results,
        ];
        return fetchMoreResult;
      },
    });
  };

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
      {movies && (
        <Content
          scrollHandler={scrollHandler}
          path={WebsiteUrls.SEARCH}
          title="Found films"
          movies={movies}
        />
      )}
    </div>
  );
};

export default Search;
