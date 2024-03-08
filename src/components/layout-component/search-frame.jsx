import React from "react";
import Button from "../main-components/Button";
import Input from "../main-components/Input";
import Content from "./Content";
import InvlidInput from "../main-components/InvlidInput";

function SearchFrame({updateCity, fetchData}){
    function handelSubmit(e) {
        e.preventDefault();
        updateCity(e.target.city.value);
    }
    
    return (
        <div>
            <div className="search-bar">
                        <form method="post" onSubmit = {handelSubmit}>
                            <input  type="text" placeholder="Choose a City" autoComplete="on" name="city"className="search-bar-input"
                                id="city"></input>
                            <button type="submit" className="btn btn-success button-additions"><i
                                className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
            </div>
            <InvlidInput />
        </div>        
    )
}

export default SearchFrame;