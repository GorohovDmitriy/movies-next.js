import { GetServerSideProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Spinner from "../../components/Spinner";
import { DETAIL_MOVIE } from "../../queries";
import { Container } from "../../styles/popular";
import { WebsiteUrls } from "../../types/enums";
import Details from "../../components/Details";
import Head from "next/head";

interface PopularMovieProps {
  movieId: number;
}

const PopularMovie: NextPage<PopularMovieProps> = ({ movieId }) => {
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
        <title>{movie.title}</title>
      </Head>
      <Container>
        <Details movie={movie} />
      </Container>
    </>
  );
};

export default PopularMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { movieId: query.id },
  };
};
