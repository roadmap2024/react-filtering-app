import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { searchData } from '../redux/actions/cardActions'

const Header = ({ search, setSearch, handleChange }) => {
    const [sort, setSort] = useState('asc');
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchData(search));
    }, [search, dispatch])

    return (
        <header>
            <div className="title">
                <h1 style={{color: "#000000B8"}}>React Redux Fitering App</h1>
            </div>

            <div className="filters" style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <div className="searchInput">
                    <input 
                        style={{height: "40px", padding: "5px", paddingLeft: "10px", width: "300px", fontSize: "17px"}}
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Type your search words" />
                </div>

                <div className="sortBar">
                    <select
                        style={{height: "54px", padding: "5px", marginLeft: "30px", width: "90px"}}
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