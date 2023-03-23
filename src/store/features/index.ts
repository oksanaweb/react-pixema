import { fetchMovies } from "./MovieSlice/MovieSlice";
import { fetchMoviesByParameter } from "./FilterSlice/FilterSlice";
import { fetchMoviesTrends } from "./TrendsSlice/TrendsSlice";

import { fetchMoviesDetails } from "./MovieDetailsSlice/MovieDetailsSlice";

import { setMovieTitle } from "./FilterSlice/FilterSlice";
import { setMovieType } from "./FilterSlice/FilterSlice";
import { setMovieYear } from "./FilterSlice/FilterSlice";

export {
  fetchMovies,
  fetchMoviesByParameter,
  fetchMoviesDetails,
  fetchMoviesTrends,
  setMovieTitle,
  setMovieType,
  setMovieYear,
};
