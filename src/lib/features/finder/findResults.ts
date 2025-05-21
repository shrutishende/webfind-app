export const findResults = async (searchQuery , start=1) => {
    const URI = `/search?query=${encodeURIComponent(
        searchQuery
    )}&start=${start}`;
    const response = await fetch(URI);

    if (!response.ok) {
        throw new Error(`Response wasn't ok! Status : ${response.status}`);
    }

    return await response.json();
};
