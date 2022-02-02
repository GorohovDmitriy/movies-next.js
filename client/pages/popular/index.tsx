import Head from "next/head";
import Spinner from "../../components/Spinner";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { TRENDING_MOVIES } from "../../queries";
import { Container, Title } from "../../styles/popular";
import { WebsiteUrls } from "../../types/enums";
import { IMovie } from "../../types/movies";
import CardMovie from "../../components/CardMovie";
import { Fragment } from "react";

const Popular: NextPage = () => {
    
  const router: NextRouter = useRouter();
  const { data, error, loading } = useQuery(TRENDING_MOVIES);

  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <div>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Container>
        <Title>Most Popular Movies</Title>
        {data.trendingMovies.results.map((movie: IMovie) => (
          <Fragment key={movie.id}>
            <CardMovie movie={movie} />
          </Fragment>
        ))}
      </Container>
    </div>
  );
};

export default Popular;
