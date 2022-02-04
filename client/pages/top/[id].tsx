import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Details from "../../components/Details";
import Spinner from "../../components/Spinner";
import { DETAIL_MOVIE } from "../../queries";
import { Container } from "../../styles/top";
import { WebsiteUrls } from "../../types/enums";

interface TopMovieProps {
  movieId: number;
}

const TopMovie: NextPage<TopMovieProps> = ({ movieId }) => {
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

export default TopMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { movieId: query.id },
  };
};
