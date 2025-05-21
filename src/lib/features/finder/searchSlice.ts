import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findResults } from "./findResults";

interface FetchResultsArgs {
    searchValue: string;
    start: number;
}
interface SearchResults {
    items: any[]; 
    totalResults: number;
}
interface SearchItem {
    id: string;
    title: string;
    link: string;
    snippet: string;
}

interface SearchState {
    query: string;
    results: SearchItem[];
    totalResults: number;
    currentPage: number;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export const fetchResults = createAsyncThunk<SearchResults, FetchResultsArgs>(
    "fetchResults",
    async ({ searchValue, start = 1 }, { rejectWithValue }) => {
        try {
            const results = await findResults(searchValue, start);
            console.log("create async thunk", results);
            return {
                items: results.items || [],
                totalResults: parseInt(results.totalResults || "0"),
            };
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(
                    error.message || "Failed to fetch results"
                );
            }
            return rejectWithValue("Failed to fetch results");
        }
    }
);

const initialState : SearchState= {
    query: "",
    results: [],
    totalResults: 0,
    currentPage: 1,
    status: "idle",
    error: null,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchResults.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchResults.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.results = action.payload.items;
                state.totalResults = action.payload.totalResults;
            })
            .addCase(fetchResults.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload as string;
            });
    },
});

export const { setQuery, setCurrentPage } = searchSlice.actions;

export default searchSlice.reducer;
