import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetch-movies", async (apiUrl) => {
	const response = await fetch(apiUrl);
	return response.json();
});

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		movies: [],
		fetchStatus: "",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.fulfilled, (state, action) => {
				if (action.payload.page === 1) {
					state.movies = [action.payload];
				} else {
					state.movies = [...state.movies, action.payload];
				}
				state.fetchStatus = "success";
			})
			.addCase(fetchMovies.pending, (state) => {
				state.fetchStatus = "loading";
			})
			.addCase(fetchMovies.rejected, (state) => {
				state.fetchStatus = "error";
			});
	},
});

export default moviesSlice;
