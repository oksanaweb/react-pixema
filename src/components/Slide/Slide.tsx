import React from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { Movie } from "types";
import { SlideMovie, SlidePoster, Title } from "./styles";

interface SlideProps {
  movie: Movie;
}

export const Slide = ({ movie }: SlideProps) => {
  const { title, poster, imdbID } = movie;
  return (
    <SlideMovie to={`/details/${imdbID}`}>
      <SlidePoster src={poster} />
      <Title>{title}</Title>
    </SlideMovie>
  );
};
