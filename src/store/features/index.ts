import { fetchMovies } from "./MovieSlice/MovieSlice";
import { fetchMoviesByParameter } from "./FilterSlice/FilterSlice";
import { fetchMoviesTrends } from "./TrendsSlice/TrendsSlice";
import { fetchMoviesDetails } from "./MovieDetailsSlice/MovieDetailsSlice";
import { setMovieTitle } from "./FilterSlice/FilterSlice";
import { setMovieType } from "./FilterSlice/FilterSlice";
import { setMovieYear } from "./FilterSlice/FilterSlice";
import { nextMoviePage } from "./MovieSlice/MovieSlice";
import { fetchNextPageMovies } from "./MovieSlice/MovieSlice";
import { wipeOutMovies } from "./FilterSlice/FilterSlice";
import { deleteMoviesParameters } from "./FilterSlice/FilterSlice";
import { fetchSignInUser } from "./UserSlice/UserSlice";
import { toggleMode } from "./ThemeSlice/ThemeSlice";
import { fetchNextPageTrends } from "./TrendsSlice/TrendsSlice";
import { nextTrendsPage } from "./TrendsSlice/TrendsSlice";
import { addFavorites } from "./FavoriteSlice/FavoriteSlice";
import { fetchResetPassword } from "./UserSlice/UserSlice";
import { fetchUpdateEmail } from "./UserSlice/UserSlice";
import { fetchUpdatePassword } from "./UserSlice/UserSlice";
import { updateUserName } from "./UserSlice/UserSlice";
import { fetchSignOut } from "./UserSlice/UserSlice";

export {
  fetchMovies,
  fetchMoviesByParameter,
  fetchMoviesDetails,
  fetchMoviesTrends,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  nextMoviePage,
  fetchNextPageMovies,
  wipeOutMovies,
  deleteMoviesParameters,
  fetchSignInUser,
  toggleMode,
  fetchNextPageTrends,
  nextTrendsPage,
  addFavorites,
  fetchResetPassword,
  fetchUpdateEmail,
  fetchUpdatePassword,
  updateUserName,
  fetchSignOut,
};
