import { FC } from "react";
import {
  IDetails,
  IGenre,
  IProductCompany,
  IProductCountry,
} from "../../types/movies";
import { imageUrl } from "../../utils";
import {
  Block,
  Budget,
  Company,
  Countries,
  Genres,
  Info,
  Language,
  Link,
  Original,
  Overview,
  Poster,
  Release,
  Status,
  Tagline,
  Time,
  Title,
  Vote,
  Wrapper,
} from "./style";
import DetailGenre from "../DetailGenre";
import DetailCompany from "../DetailCompany";
import DetailCountry from "../DetailCountry";
import StarRatingComponent from "react-star-rating-component";

interface DetailsProps {
  movie: IDetails;
}

const Details: FC<DetailsProps> = ({ movie }) => {
  return (
    <Wrapper>
      <Poster src={`${imageUrl}${movie?.poster_path}`} alt={movie.title} />
      <Info>
        <Title>Title: {movie.title}</Title>
        <Original>Original title: {movie.original_title}</Original>
        <Block>
          <Vote>Vote average: {movie.vote_average}</Vote>
          <StarRatingComponent
            name="rate"
            starCount={Number(10)}
            value={Number(movie.vote_average)}
            starColor="#ffd700"
          />
        </Block>
        <Language>
          Language: {movie.original_language.toLocaleUpperCase()}
        </Language>
        <Release>Date release: {movie.release_date}</Release>
        <Time>Runtime: {movie.runtime} min</Time>
        <Status>Status: {movie.status}</Status>
        <Budget>Budget: {movie.budget}$</Budget>
        <Genres role="genre">
          Genres:
          {movie.genres.map((genre: IGenre) => (
            <DetailGenre key={genre.id} genre={genre} />
          ))}
        </Genres>
        <Tagline>Tagline: {movie.tagline}</Tagline>
        <Vote>Vote count: {movie.vote_count}</Vote>
        <Link>
          <p>Link:</p>
          <a href={`${movie.homepage}`} target="_blank" rel="noreferrer">
            {movie.homepage}
          </a>
        </Link>
        <Company role="company">
          Products companies:
          {movie.production_companies.map((product: IProductCompany) => (
            <DetailCompany key={product.id} company={product} />
          ))}
        </Company>
        <Countries role="country">
          {movie.production_countries.map((country: IProductCountry) => (
            <DetailCountry country={country} key={country.iso_3166_1} />
          ))}
        </Countries>
        <Overview>Overview: {movie.overview}</Overview>
      </Info>
    </Wrapper>
  );
};

export default Details;
