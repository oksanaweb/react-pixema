import React from "react";
import { Movie } from "types";
import { MovieItem } from "components";
import { memo } from "react";

import { StyledMovieList } from "./styles";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = memo(({ movies }: MovieListProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} />;
      })}
    </StyledMovieList>
  );
});
