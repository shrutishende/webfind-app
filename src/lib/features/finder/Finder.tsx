"use client";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, setCurrentPage, setQuery } from "./searchSlice";
import { AppDispatch, RootState } from "@/lib/store";

export default function Finder() {
    const dispatch = useDispatch<AppDispatch>();

    const { status, query } = useSelector((state : RootState) => state.search);
    const [input, setInput] = useState(query);

    const handleSearch = async (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();
        if (input) {
            dispatch(fetchResults({ searchValue: input, start: 1 }));
            dispatch(setQuery(input));
            dispatch(setCurrentPage(1));
        }
    };

    return (
        <>
            <div className="flex justify-center mt-7">
                <form className="mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search the web..."
                        className="border p-2 rounded-l-md focus:outline-none w-lg"
                    />
                    <button
                        type="submit"
                        onClick={handleSearch}
                        disabled={status === "loading" || !input}
                        className="bg-blue-500 text-white p-2 rounded-r-md"
                    >
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}
