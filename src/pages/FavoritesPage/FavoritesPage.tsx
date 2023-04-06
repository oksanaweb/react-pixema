import { FavoriteList } from "components";
import React from "react";
import { useAppSelector } from "store";
import { getFavorites } from "store/selectors";
import { EmptyText, NotFoundBox, StyledFavorites, StyledImg } from "./styles";
import { NotFoundMovie } from "assets";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
    <StyledFavorites>
      {favorites?.length > 0 ? (
        <FavoriteList />
      ) : (
        <NotFoundBox>
          <StyledImg src={NotFoundMovie} />
          <EmptyText>Your list of favorite movies is empty</EmptyText>
        </NotFoundBox>
      )}
    </StyledFavorites>
  );
};
