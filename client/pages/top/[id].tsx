import { GetServerSideProps, NextPage } from "next";
import DetailsComponent from "../../components/DetailsComponent";

interface TopMovieProps {
  movieId: number;
}

const TopMovie: NextPage<TopMovieProps> = ({ movieId }) => (
  <>
    <DetailsComponent movieId={movieId} />
  </>
);

export default TopMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { movieId: query.id },
  };
};
