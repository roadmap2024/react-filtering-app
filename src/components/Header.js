import React, { useState } from "react";

const Header = ({ search, setSearch, handleChange }) => {
    const [sort, setSort] = useState('asc');
    return (
        <header>
            <div className="title">
                <h1>React Redux Fitering App</h1>
            </div>

            <div className="filters" style={{display: "flex", justifyContent: "center", marginRight: "30px"}}>
                <div className="searchInput">
                    <input 
                        style={{height: "40px", padding: "5px"}}
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Type your search words" />
                </div>

                <div className="sortBar">
                    <select
                        style={{height: "40px", padding: "5px", marginLeft: "30px"}}
                        >
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;