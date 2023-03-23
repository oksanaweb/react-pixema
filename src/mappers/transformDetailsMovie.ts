import { MovieDetailsApi, MovieDetails } from "types/types";

export const transformDetailsMovies = (
  details: MovieDetailsApi
): MovieDetails => {
  return {
    title: details.Title,
    year: details.Year,
    rated: details.Rated,
    released: details.Released,
    runtime: details.Runtime,
    genre: details.Genre,
    director: details.Director,
    writer: details.Writer,
    actors: details.Actors,
    plot: details.Plot,
    language: details.Language,
    country: details.Country,
    awards: details.Awards,
    poster: details.Poster,
    metascore: details.Metascore,
    imdbRating: details.imdbRating,
    imdbVotes: details.imdbVotes,
    imdbID: details.imdbID,
    type: details.Type,
    dvd: details.DVD,
    boxOffice: details.BoxOffice,
    production: details.Production,
    website: details.Website,
    response: details.Response,
  };
};
