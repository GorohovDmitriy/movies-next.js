import Head from "next/head";
import Content from "../../components/Content";
import { NextPage } from "next";
import { Container, Form, Input, Title } from "../../styles/search";
import { useQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "../../queries";
import { FormEvent, useState } from "react";
import { WebsiteUrls } from "../../types/enums";
import { IMovieSearch } from "../../types/movies";
import Welcome from "..";
import useDebounce from "../../utils/useDebounce";

const Search: NextPage = () => {
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, 1000);
  const { data, fetchMore } = useQuery<IMovieSearch>(SEARCH_MOVIES, {
    variables: {
      title: searchValue,
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
            data-testid="input"
            value={value}
            onChange={changeHandler}
            placeholder="Enter name movie"
          />
        </Form>
      </Container>
      {!movies && <Welcome />}
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
