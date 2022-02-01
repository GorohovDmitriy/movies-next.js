import { FC } from "react";
import { IMovie } from "../../types/movies";
import { imageUrl } from "../../utils";
import { Container, Poster, Review } from "./style";

interface CardMovieProps {
  movie: IMovie;
}

const CardMovie: FC<CardMovieProps> = ({ movie }) => {
  return (
    <Container>
      <Poster src={`${imageUrl}${movie.poster_path}`} alt="Poster" />
      <Review>{movie.title}</Review>
      <Review>{movie.original_title}</Review>
    </Container>
  );
};

export default CardMovie;
