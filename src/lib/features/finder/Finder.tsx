"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchResults,
    setCurrentPage,
    setQuery,
    fetchSuggestions,
} from "./searchSlice";
import {
    Autocomplete,
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
} from "@mui/material";


export default function Finder() {

    const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
    ]
    const dispatch = useDispatch();

    const { status, query, suggestions, suggestionsStatus } = useSelector(
        (state) => state.search
    );
    const [input, setInput] = useState(query);
    const [open, setOpen] = useState(false);
    console.log("input", input);

    console.log("suggestions", suggestions)

 


    const handleSearch = async (e) => {
        e.preventDefault();
        if (input) {
              dispatch(fetchResults({ searchValue: input, start: 1 }));
            dispatch(setQuery(input));
            dispatch(setCurrentPage(1));
          
        }
    };


   
    

    // useEffect(() => {
    //     console.log("use effect");
    //     if (input) {
    //         dispatch(fetchResults({ searchValue: input, start: 1 }));
    //     }

        
    // }, [input, dispatch]);

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
