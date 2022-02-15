import React from "react";

const SearchName=({searchfield, searchChange})=>{
    return (
    <div className="pa3 ma2">
        <input 
            className="ba b--green bg-lightest-blue tc"
            type="search" 
            placeholder="Search a vegetable" 
            onChange={searchChange}
        />
    </div>
    );
}


export default SearchName;