import { FC } from "react";
import { IMovie } from "../../types/movies";
import { imageUrl } from "../../utils";
import {
  Container,
  Poster,
  Release,
  ButtonGroup,
  Overview,
  Title,
  Wrap,
  Button,
  Block,
} from "./style";

interface CardMovieProps {
  movie: IMovie;
}

const CardMovie: FC<CardMovieProps> = ({ movie }) => {
  return (
    <Container>
      <Poster src={`${imageUrl}${movie.backdrop_path}`} alt="Poster" />
      <Wrap>
        <div>
          <Title>{movie.title}</Title>
          <Release>Release date: {movie.release_date}</Release>
        </div>
        <Block>
          <Overview>Overview: {movie.overview}</Overview>
          <ButtonGroup>
            <Button>Open movie</Button>
          </ButtonGroup>
        </Block>
      </Wrap>
    </Container>
  );
};

export default CardMovie;
