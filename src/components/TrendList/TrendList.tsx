import React from "react";
import { Movie } from "types";
import { StyledTrends } from "./styles";
import { MovieItem } from "components/MovieItem/MovieItem";
import { memo } from "react";

interface TrendsProps {
  movies: Movie[];
}

export const TrendList = memo(({ movies }: TrendsProps) => {
  return (
    <StyledTrends>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} isTrend={true} />;
      })}
    </StyledTrends>
  );
});
