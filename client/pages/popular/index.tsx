import Head from "next/head";
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TRENDING_MOVIES } from "../../queries";
import { WebsiteUrls } from "../../types/enums";
import { IMoviesPopular } from "../../types/movies";

const Popular: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading, fetchMore } = useQuery<IMoviesPopular>(
    TRENDING_MOVIES,
    {
      variables: { page: 1 },
    }
  );
  const movies = data?.trendingMovies?.results;

  const scrollHandler = () => {
    const pages = data?.trendingMovies?.page;
    fetchMore({
      variables: { page: Number(pages) + 1 },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.trendingMovies.results = [
          ...prevResult.trendingMovies.results,
          ...fetchMoreResult.trendingMovies.results,
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
        <title>Popular Movies</title>
      </Head>
      <Content
        scrollHandler={scrollHandler}
        path={WebsiteUrls.POPULAR}
        title="Most Popular Movies"
        movies={movies}
      />
    </div>
  );
};

export default Popular;
