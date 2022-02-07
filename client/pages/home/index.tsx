import Head from "next/head";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { NOW_PLAYING } from "../../queries";
import { WebsiteUrls } from "../../types/enums";
import { NextRouter, useRouter } from "next/router";
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading, fetchMore } = useQuery(NOW_PLAYING, {
    variables: { page: null },
  });
  const movies = data?.nowPlaying?.results;

  const scrollHandler = () => {
    const pages = data.nowPlaying.page;
    fetchMore({
      variables: { page: Number(pages + 1) },
      updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
        fetchMoreResult.nowPlaying.results = [
          ...prevResult.nowPlaying.results,
          ...fetchMoreResult.nowPlaying.results,
        ];
        return fetchMoreResult;
      },
    });
  };

  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <>
      <Head>
        <title>Home Movies</title>
      </Head>
      <Content
        scrollHandler={scrollHandler}
        path={WebsiteUrls.HOME}
        title="Movies that are in cinemas now"
        movies={movies}
      />
    </>
  );
};

export default Home;
