import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMoviesDetails } from "store/features";
import { getDetailsMovie } from "store/selectors";

export const MovieDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { details, isLoading, error } = useAppSelector(getDetailsMovie);
  const { imdbID = "" } = useParams();

  const {
    title,
    genre,
    poster,
    imdbRating,
    runtime,
    plot,
    year,
    released,
    boxOffice,
    country,
    production,
    actors,
    director,
    writer,
  } = details;

  useEffect(() => {
    dispatch(fetchMoviesDetails(imdbID));
  }, [dispatch, imdbID]);

  return <div>MovieDetailsPage</div>;
};
