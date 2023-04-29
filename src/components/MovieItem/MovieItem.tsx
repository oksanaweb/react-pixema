import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "types";
import { FavoriteLabel, MovieBox, MovieCard, MoviePoster, PosterWrap, TitleMovie, TrendsLabel } from "./styles";
import { BookMarkIcon, FireIcon, ImageNotFount } from "assets";
import { Colors } from "ui";
import { memo } from "react";

interface MovieItemProps {
  movie: Movie;
  isTrend?: boolean;
  isFavorite?: boolean;
}

export const MovieItem = memo(({ isFavorite, isTrend, movie: { title, poster, imdbID } }: MovieItemProps) => {
  return (
    <Link to={`/details/${imdbID}`}>
      <MovieBox>
        <MovieCard whileHover={{ scale: 1.05 }} whileInView={{ opacity: 1 }}>
          {isTrend && (
            <TrendsLabel>
              <FireIcon />
            </TrendsLabel>
          )}
          {isFavorite && (
            <FavoriteLabel>
              <BookMarkIcon fill={Colors.PRIMARY} />
            </FavoriteLabel>
          )}

          <PosterWrap>
            {poster === "N/A" ? <MoviePoster src={ImageNotFount} /> : <MoviePoster src={poster} />}
          </PosterWrap>
          <TitleMovie>{title}</TitleMovie>
        </MovieCard>
      </MovieBox>
    </Link>
  );
});
