import { GetServerSideProps, NextPage } from "next";
import DetailsComponent from "../../components/DetailsComponent";

interface HomeMovieProps {
  movieId: number;
}

const HomeMovie: NextPage<HomeMovieProps> = ({ movieId }) => (
  <>
    <DetailsComponent movieId={movieId} />
  </>
);

export default HomeMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { movieId: query.id },
  };
};
