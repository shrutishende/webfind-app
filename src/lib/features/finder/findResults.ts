//const URI = "/search";
console.log("find twweeets");
export const findResults = async (searchQuery) => {
    console.log("serach query", searchQuery);
    console.log("11111111111");
    const URI = `/search?query=${encodeURIComponent(searchQuery)}`;
    console.log("uri", URI)
    const response = await fetch(URI);
    console.log("find results+++++++++++", response);

    if (!response.ok) {
        throw new Error(`Response wasn't ok! Status : ${response.status}`);
    }

    return await response.json();
};
