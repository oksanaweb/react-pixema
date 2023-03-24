import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformDetailsMovies } from "mappers";
import { MovieDetailsInfo } from "types/types";

interface DetailsState {
  details: MovieDetailsInfo;
  isLoading: boolean;
  error: string | null;
}

const initialState: DetailsState = {
  details: {} as MovieDetailsInfo,
  isLoading: false,
  error: null,
};

export const fetchMoviesDetails = createAsyncThunk<
  MovieDetailsInfo,
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
