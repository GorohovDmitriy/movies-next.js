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
  const { data, error, loading } = useQuery(NOW_PLAYING);
  const movies = data?.nowPlaying?.results;
  
  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <>
      <Head>
        <title>Home Movies</title>
      </Head>
      <Content path='/home' title="Movies that are in cinemas now" movies={movies} />
    </>
  );
};

export default Home;
