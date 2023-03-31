import React from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { Movie } from "types";
import { MovieBox, MovieCard, MoviePoster, PosterWrap, TitleMovie } from "./styles";
import { ImageNotFount } from "assets";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Link to={generatePath(ROUTE.Movie_details, { imdbID: movie.imdbID })}>
      <MovieBox>
        <MovieCard>
          <PosterWrap>
            {movie.poster === "N/A" ? (
              <MoviePoster src={ImageNotFount} />
            ) : (
              <MoviePoster src={movie.poster} />
            )}
          </PosterWrap>

          <TitleMovie>
            {movie.title} {movie.year}
          </TitleMovie>
        </MovieCard>
      </MovieBox>
    </Link>
  );
};
