"use client";
import React from "react";
//import NumberOfResults from "../NumberOfResults/NumberOfResults";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, setQuery } from "./searchSlice";

export default function Finder() {
    const dispatch = useDispatch();
    // const { tweets, isLoading, error } = useSelector((state) => state.finder);
    //  const numberOfResults = useSelector((state) => state.numberOfResults);
    const status = useSelector((state) => state.search.status);
    const [input, setInput] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (input) {
            // setSearchValue("");
            // dispatch(fetchTweets({searchValue, numberOfResults}));
            dispatch(setQuery(input));
            dispatch(fetchResults(input, 10));
        }
    };

    //     if (error) {
    //     console.log("We couldn't fetch tweets right now. Please try again later.");
    // }

    return (
        <>
            <div className="flex justify-center mt-7">
                <form onSubmit={handleSearch} className="mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search the web..."
                        className="border p-2 rounded-l-md focus:outline-none w-lg"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-blue-500 text-white p-2 rounded-r-md"
                    >
                        {status === "loading" ? "Searching..." : "Search"}
                    </button>
                </form>
            </div>
        </>
    );
}
