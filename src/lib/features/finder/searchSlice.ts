import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { findResults } from "./findResults";

export const fetchResults =
    (searchValue, numberOfResults) => async (dispatch) => {
        console.log("fetch tweets");
        try {
            dispatch(isLoadingResults());
            const results = await findResults(searchValue);
            console.log("resukts", results);
            dispatch(loadingResultsSuccess(results));
        } catch (error) {
            const errorMsg = error.toString();
            dispatch(loadingResultsFailed(errorMsg));
        }
    };

// const FETCH_TWEETS = "FETCH_TWEETS";

// export const fetchTweets = createAsyncThunk(
//     FETCH_TWEETS,
//     async (params, thunkAPI) =>
//         await findTweets(params.searchValue, params.numberOfResults)
// );

//const initialState = { tweets: [], isLoading: false, error: null };

const initialState = { query: "", results: [], status: "idle", error: null };

export const searchSlice = createSlice({
    name: "finder",
    initialState,

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        isLoadingResults: (state) => {
            state.status = "loading";
            state.error = null;
        },
        loadingResultsSuccess: (state, action) => {
            state.status = "succeeded";
            state.results = action.payload;
        },
        loadingResultsFailed: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
    },

    //     extraReducers:(builder) => {
    //         [fetchTweets.fulfilled]: (state, { payload }) => {
    //             state.tweets = payload;
    //             state.isLoading = false;
    //             state.error = null;
    //         },
    //         [fetchTweets.pending]: (state) => {
    //             state.isLoading = true;
    //             state.error = null;
    //         },

    //         [fetchTweets.rejected]: (state, { payload }) => {
    //             state.isLoading = false;
    //             state.error =
    //                 "We couldn't fetch tweets right now. Please try again later.";
    //         },
    //     },
});

export const {
    setQuery,
    isLoadingResults,
    loadingResultsSuccess,
    loadingResultsFailed,
} = searchSlice.actions;

export default searchSlice.reducer;
