import React from "react";

const Search = props => {

    const handleChange = event => {
        props.setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="header">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Find a restaurant"
                        value={props.searchTerm}
                        onChange={handleChange}
                    />
                    <button onClick={() => props.history.push("/results")}>
                        Find
                    </button>
                </div>
            </div>

        </>
    );
};

export default Search;
