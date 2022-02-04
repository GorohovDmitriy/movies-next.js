import { GetServerSideProps, NextPage } from "next";
import DetailsComponent from "../../components/DetailsComponent";

interface PopularMovieProps {
  movieId: number;
}

const PopularMovie: NextPage<PopularMovieProps> = ({ movieId }) => (
  <>
    <DetailsComponent movieId={movieId} />
  </>
);

export default PopularMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { movieId: query.id },
  };
};
