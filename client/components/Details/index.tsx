import { FC } from "react";
import { IDetails } from "../../types/movies";

interface DetailsProps {
  movie: IDetails;
}

const Details: FC<DetailsProps> = ({ movie }) => {
  return <h1>{movie.title}</h1>;
};

export default Details;
