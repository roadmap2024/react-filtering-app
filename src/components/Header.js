import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { searchData, sortAscData, sortDescData } from '../redux/actions/cardActions'

const Header = ({ search, setSearch, handleChange }) => {
    const [sort, setSort] = useState('asc');
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchData(search));
        if (sort === "asc") {
            dispatch(sortAscData());
        }
        if (sort === "desc") {
            dispatch(sortDescData());
        }
    }, [search, sort, dispatch])

    return (
        <header>
            <div className="title">
                <h1 style={{color: "#000000B8"}}>React Redux Fitering App</h1>
            </div>

            <div className="filters" style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <div className="searchInput">
                    <input 
                        className="input-style"
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Type your search words" />
                </div>

                <div className="sortBar">
                    <select
                        className="select-style"
                        onChange={(e) => setSort(e.target.value)}
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