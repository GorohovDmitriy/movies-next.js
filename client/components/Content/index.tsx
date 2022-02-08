import { NextPage } from "next";
import { Waypoint } from "react-waypoint";
import { Fragment } from "react";
import { Container, Title } from "../../styles/top";
import { IMovie } from "../../types/movies";
import CardMovie from "../CardMovie";

interface ContainerProps {
  title: string;
  movies?: IMovie[] | undefined;
  path: string;
  scrollHandler: () => void;
}

const Content: NextPage<ContainerProps> = ({
  title,
  movies,
  path,
  scrollHandler,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {movies?.map((movie: IMovie, index: number) => (
        <Fragment key={movie.id}>
          <CardMovie path={path} movie={movie} />
          {index === movies.length - 2 && (
            <Waypoint
              scrollableAncestor={window}
              key={movie.id}
              onEnter={() => scrollHandler()}
            />
          )}
        </Fragment>
      ))}
    </Container>
  );
};

export default Content;
