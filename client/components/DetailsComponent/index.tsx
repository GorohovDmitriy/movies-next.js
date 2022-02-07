import Head from "next/head";
import { FC } from "react";
import Details from "../Details";
import Spinner from "../Spinner";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DETAIL_MOVIE } from "../../queries";
import { Container } from "../../styles/home";
import { WebsiteUrls } from "../../types/enums";

interface HomeMovieProps {
  movieId: number;
}

const DetailsComponent: FC<HomeMovieProps> = ({ movieId }) => {
  const router = useRouter();
  const { data, error, loading } = useQuery(DETAIL_MOVIE, {
    variables: { id: Number(movieId) },
  });
  const movie = data?.detailsMovie;

  if (error) router.push(WebsiteUrls.ERROR);
  if (loading) return <Spinner />;

  return (
    <>
      <Head>
        <title>{movie?.title}</title>
      </Head>
      <Container>
        <Details movie={movie} />
      </Container>
    </>
  );
};

export default DetailsComponent;
