import Head from "next/head";
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TOP_MOVIES } from "../../queries";
import { WebsiteUrls } from "../../types/enums";

const Top: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading, fetchMore } = useQuery(TOP_MOVIES, {
    variables: { page: null },
  });
  const movies = data?.topMovies?.results;

  const scrollHandler = () => {
    const pages = data.topMovies.page;
    fetchMore({
      variables: { page: Number(pages + 1) },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.topMovies.results = [
          ...prevResult.topMovies.results,
          ...fetchMoreResult.topMovies.results,
        ];
        return fetchMoreResult;
      },
    });
  };

  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <div>
      <Head>
        <title>Top Movies</title>
      </Head>
      <Content
        scrollHandler={scrollHandler}
        path="/top"
        title="Top rated films"
        movies={movies}
      />
    </div>
  );
};

export default Top;
