import { NextResponse } from "next/server";

export async function GET(request) {
    console.log("api in");
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("query");
    const num = searchParams.get("num") || 10;
    console.log("num", num);
    const start = searchParams.get("start") || "1";
    console.log("start", start);
    if (!query) {
        return NextResponse.json(
            { error: "Query is required" },
            { status: 400 }
        );
    }

    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        const cx = process.env.GOOGLE_CX_ID;

        const response = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(
                query
            )}&start=${start}`
        );

        console.log("res", response);

        if (!response.ok) {
            throw new Error(
                `Google API responded with status: ${response.status}`
            );
        }
        const data = await response.json();
        // console.log("data+++++++++++++++++", data);
        //  console.log("nextStart", data.queries?.nextPage?.[0]?.startIndex);
        console.log(
            "total result++++++",
            parseInt(data.searchInformation?.totalResults || "0")
        );
        return NextResponse.json({
            items: data.items || [],
            totalResults: parseInt(data.searchInformation?.totalResults || "0"),
            startIndex: parseInt(start),
        });

        // return NextResponse.json(data.items || []);
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch search results" },
            { status: 500 }
        );
    }
}
