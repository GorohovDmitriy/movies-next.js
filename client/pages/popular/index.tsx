import Head from "next/head";
import Spinner from "../../components/Spinner";
import Content from "../../components/Content";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TRENDING_MOVIES } from "../../queries";
import { WebsiteUrls } from "../../types/enums";

const Popular: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading } = useQuery(TRENDING_MOVIES);
  const movies = data?.trendingMovies?.results;

  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <div>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Content title="Most Popular Movies" movies={movies} />
    </div>
  );
};

export default Popular;
