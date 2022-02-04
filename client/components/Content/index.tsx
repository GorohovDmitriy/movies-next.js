import { NextPage } from "next";
import { Fragment } from "react";
import { Container, Title } from "../../styles/top";
import { IMovie } from "../../types/movies";
import CardMovie from "../CardMovie";

interface ContainerProps {
  title: string;
  movies: IMovie[];
}

const Content: NextPage<ContainerProps> = ({ title, movies }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {movies?.map((movie: IMovie) => (
        <Fragment key={movie.id}>
          <CardMovie movie={movie} />
        </Fragment>
      ))}
    </Container>
  );
};

export default Content;
