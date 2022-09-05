import { Component } from "react";
import './search-box.css';
    
const SearchBox = ({className, placeholder, onChangeHandler}) => (
            <center>
            <div>
                <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onChangeHandler} />
                </div>
                </center>
)

export default SearchBox;