import React from "react";
import { useAppSelector } from "store";
import { getFavorites } from "store/selectors";
import { StyledList } from "./styles";
import { MovieItem } from "components";

export const FavoriteList = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
    <StyledList>
      {favorites.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} isFavorite={true} />;
      })}
    </StyledList>
  );
};
