import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformDetailsMovies, transformMoviesApi } from "mappers";
import { Movie, MovieDetailsInfo } from "types/types";

interface DetailsState {
  details: MovieDetailsInfo;
  isLoading: boolean;
  error: string | null;
  recommendations: Movie[];
}

const initialState: DetailsState = {
  details: {} as MovieDetailsInfo,
  isLoading: false,
  error: null,
  recommendations: [],
};

export const fetchMoviesDetails = createAsyncThunk<
  MovieDetailsInfo,
  string,
  { rejectValue: string }
>("details/fetchMoviesDetails", async (imdbID, { rejectWithValue }) => {
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

//Movie recommendations
export const fetchMoviesRecommendations = createAsyncThunk<
  Movie[],
  string,
  { rejectValue: string }
>("movies/fetchMoviesRecommends", async (title, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?s=man&apikey=85b6fcde&"
    );

    const transformedMovies = transformMoviesApi(data);
    return transformedMovies;
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
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
