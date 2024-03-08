import React from "react";
import Nextto from "./Nextto";
import Alerts from "./Alerts";
import Sun from "./Sun";
import MapStation from "./MapStation";
import Toggle from "../main-components/Toggle";



function WeatherFrame({weatherData}){
    return(
        <div>
            <Toggle />
            <Nextto weatherData={weatherData} />
            <Alerts value={weatherData} />
            <Sun weatherData={weatherData}/>
            <MapStation weatherData={weatherData} />
        </div>
    )
}

export default WeatherFrame;




