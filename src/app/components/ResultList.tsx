"use client";

import React from "react";
import { useSelector } from "react-redux";

export default function ResultList() {
    const { results, status, error } = useSelector((state) => state.search);
    console.log(results)

    if (status === "loading") {
        return <p>Loading results...</p>;
    }

    if (status === "failed") {
        return <p>Error: {error}</p>;
    }

    // if (!results || results.length === 0) {
    //     return <p>No results found.</p>;
    // }
    return (
        <>
            <div className="space-y-4 my-5">
                {results.map((result, index) => (
                    <div key={index} className="p-6">
                        <a
                            href={result.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            <h3 className="text-lg font-semibold">
                                {result.title}
                            </h3>
                        </a>
                        <p>{result.snippet}</p>
                        <p className="text-sm text-gray-500">{result.link}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
