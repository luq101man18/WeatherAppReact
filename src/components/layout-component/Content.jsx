import React from "react";
import WeatherFrame from "./WeatherFrame";

function Content({Data}){
    return (
        <div id="content">
            <WeatherFrame weatherData={Data}/>
        </div>
    )

}

export default Content;