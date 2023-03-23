import { fetchMovies } from "./MovieSlice/MovieSlice";
import { fetchMoviesByParameter } from "./FilterSlice/FilterSlice";

import { setMovieTitle } from "./FilterSlice/FilterSlice";
import { setMovieType } from "./FilterSlice/FilterSlice";
import { setMovieYear } from "./FilterSlice/FilterSlice";

export {
  fetchMovies,
  fetchMoviesByParameter,
  setMovieTitle,
  setMovieType,
  setMovieYear,
};
