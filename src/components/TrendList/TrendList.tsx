import React from "react";
import { Movie } from "types";
import { StyledTrends } from "./styles";
import { MovieItem } from "components/MovieItem/MovieItem";

interface TrendsProps {
  movies: Movie[];
}

export const TrendList = ({ movies }: TrendsProps) => {
  return (
    <StyledTrends>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} isTrend={true} />;
      })}
    </StyledTrends>
  );
};
