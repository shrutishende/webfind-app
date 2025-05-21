"use client";
import {
    fetchResults,
    setCurrentPage,
} from "@/lib/features/finder/searchSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { AppDispatch, RootState } from "@/lib/store";


export default function SearchPagination() {
    const dispatch = useDispatch<AppDispatch>();

    const {  query, totalResults, currentPage } = useSelector(
        (state : RootState) => state.search
    );

    

    const resultsPerPage = 10;
    const totalPages = Math.min(Math.ceil(totalResults / resultsPerPage), 10);

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        dispatch(setCurrentPage(page));
        if (query) {
            dispatch(
                fetchResults({
                    searchValue: query,
                    start: (page - 1) * resultsPerPage + 1,
                })
            );
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="p-2 my-6">
                {totalPages > 1 && (
                    <Pagination
                        color="primary"
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
}
