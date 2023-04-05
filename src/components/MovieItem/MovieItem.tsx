import React from "react";
import { generatePath, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTE } from "router";
import { Movie } from "types";
import { MovieBox, MovieCard, MoviePoster, PosterWrap, TitleMovie } from "./styles";
import { FireIcon, ImageNotFount } from "assets";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie: { title, poster, imdbID } }: MovieItemProps) => {
  return (
    <Link to={generatePath(ROUTE.Home + ROUTE.Movie_details, { imdbID: imdbID })}>
      <MovieBox>
        <MovieCard whileHover={{ scale: 1.05 }} whileInView={{ opacity: 1 }}>
          <PosterWrap>
            {poster === "N/A" ? <MoviePoster src={ImageNotFount} /> : <MoviePoster src={poster} />}
          </PosterWrap>
          <TitleMovie>{title}</TitleMovie>
        </MovieCard>
      </MovieBox>
    </Link>
  );
};
