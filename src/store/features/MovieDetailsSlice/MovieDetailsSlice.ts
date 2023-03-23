import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformDetailsMovies } from "mappers";

import { MovieDetails } from "types/types";

interface DetailsState {
  details: MovieDetails;
  isLoading: boolean;
  error: string | null;
}

const initialState: DetailsState = {
  details: {} as MovieDetails,
  isLoading: false,
  error: null,
};

export const fetchMoviesDetails = createAsyncThunk<
  MovieDetails,
  string,
  { rejectValue: string }
>("trends/fetchMoviesTrends", async (imdbID, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=85b6fcde&`
    );

    const transformedMovies = transformDetailsMovies(data);
    return transformedMovies;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const movieDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMoviesDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      state.details = payload;
    });

    builder.addCase(fetchMoviesDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default movieDetailsSlice.reducer;
