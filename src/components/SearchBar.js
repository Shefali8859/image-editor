import React, { useState } from 'react';


const SearchBar = ({setImages}) => {
    const [query, setQuery] = useState('')

    const searchImages = async(e) =>{
        e.preventDefault();
        const res = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=office&client_id=a6mmHVviEdg2zyqKj8uTBmKneZvjQp_6ec_najA-PwQ`
        );
        const data = await res.json();
        setImages(data.results);
    }
    return (
        <form onSubmit={searchImages}>
            <input
             type="text"
             value={query}  
             placeholder='Search for Images'
             onChange={(e) => setQuery(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
    )
}
export default SearchBar
