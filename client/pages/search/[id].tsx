import { GetServerSideProps, NextPage } from "next";
import DetailsComponent from "../../components/DetailsComponent";

interface SearchMovieProps {
  movieId: number;
}

const SearchMovie: NextPage<SearchMovieProps> = ({ movieId }) => (
  <>
    <DetailsComponent movieId={movieId} />
  </>
);

export default SearchMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: { movieId: query.id },
  };
};
