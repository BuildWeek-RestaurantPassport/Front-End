import React from "react";

const Home = props => {

    const handleChange = event => {
        props.setSearchTerm(event.target.value);
    };

    return (
        <div className="header">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange={handleChange}
                />
                <button onClick={() => props.history.push("/results")}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Home;
