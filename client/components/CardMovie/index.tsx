import Link from "next/link";
import { FC } from "react";
import { IMovie } from "../../types/movies";
import { imageUrl } from "../../utils";
import StarRatingComponent from "react-star-rating-component";
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
  Rating,
  WrapRating,
} from "./style";

interface CardMovieProps {
  movie: IMovie;
  path: string;
}

const CardMovie: FC<CardMovieProps> = ({ movie, path }) => {
  return (
    <Container>
      <Poster
        src={
          `${imageUrl}${movie.poster_path}` &&
          `${imageUrl}${movie.backdrop_path}`
        }
        alt="Poster"
      />
      <Wrap>
        <div>
          <Title>{movie.title}</Title>
          <Release>Release date: {movie.release_date}</Release>
          <WrapRating>
            <Rating>{movie.vote_average}</Rating>
            <StarRatingComponent
              name="rate"
              starCount={Number(10)}
              value={Number(movie.vote_average)}
              starColor="#ffd700"
            />
          </WrapRating>
        </div>
        <Block>
          <Overview>Overview: {movie.overview}</Overview>
          <ButtonGroup>
            <Link href={`${path}/${movie.id}`} passHref>
              <Button>Open movie</Button>
            </Link>
          </ButtonGroup>
        </Block>
      </Wrap>
    </Container>
  );
};

export default CardMovie;
