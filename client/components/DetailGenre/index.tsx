import { FC } from "react";
import { IGenre } from "../../types/movies";

interface DetailGenreProps {
  genre: IGenre;
}

const DetailGenre: FC<DetailGenreProps> = ({ genre }) => <li>{genre.name}</li>;

export default DetailGenre;
