import { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Title } from "../../styles/top";
import { IMovie } from "../../types/movies";
import CardMovie from "../CardMovie";

interface ContainerProps {
  title: string;
  movies: IMovie[];
  path: string
}

const Content: NextPage<ContainerProps> = ({ title, movies, path }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {movies?.map((movie: IMovie) => (
        <Fragment key={movie.id}>
          <CardMovie path={path} movie={movie} />
        </Fragment>
      ))}
    </Container>
  );
};

export default Content;
