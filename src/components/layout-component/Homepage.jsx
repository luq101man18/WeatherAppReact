import React from "react";
import Title from "./Title";
import SearchFrame from "./search-frame";

function Homepage({updateCity, fetchData}){
    return(
        <div className="homepage"> 
            <Title />
            <SearchFrame updateCity={updateCity} fetchData={fetchData}/>
            
        </div>
    )

}

export default Homepage;