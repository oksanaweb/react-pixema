import { Movie, MovieResponse } from "types";

export const transformMoviesApi = (response: MovieResponse): Movie[] => {
  return response.Search.map(({ Title, Year, imdbID, Type, Poster }) => ({
    title: Title,
    year: Year,
    imdbID: imdbID,
    type: Type,
    poster: Poster,
  }));
};
