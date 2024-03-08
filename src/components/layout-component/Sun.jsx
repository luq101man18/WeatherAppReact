import React from "react";
import Twilight from "./Twilight";
import SunTimings from "./sunTimings";


function Sun({weatherData}){
    return(
            <div className="sun-container">
                <Twilight weatherData={weatherData}/>
                <SunTimings weatherData={weatherData}/>
            </div>
    )
}

export default Sun;
