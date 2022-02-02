import Head from "next/head";
import { NextPage } from "next";
import { Container, Title } from "../styles/home";
import { useQuery } from "@apollo/client";
import { NOW_PLAYING } from "../queries";
import { WebsiteUrls } from "../types/enums";
import { NextRouter, useRouter } from "next/router";
import Spinner from "../components/Spinner";
import CardMovie from "../components/CardMovie";
import { Fragment } from "react";

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const { data, error, loading } = useQuery(NOW_PLAYING);
  console.log(data);

  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <>
      <Head>
        <title>Home Movies</title>
      </Head>
      <Container>
        <Title>Movies that are in cinemas now</Title>s
        {data?.nowPlaying?.results?.map((movie: any, index: number) => (
          <Fragment key={movie.id}>
            <CardMovie movie={movie} />
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default Home;
