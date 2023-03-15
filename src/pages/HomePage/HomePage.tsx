import React, { useEffect, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";

import { ROUTE } from "../../router/routes";
import { fetchMovies } from "../../store/features";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  console.log(movies);

  return (
    <div>
      {isLoading && <div>isload....</div>}

      {error && <span>{error}</span>}

      {movies?.length > 0 && (
        <ul>
          {movies.map((movie) => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
