import React from "react";
import Citymap from "./Citymap";
import Station from "./Station";

function  MapStation({weatherData}) {
    if(weatherData){
        return(
            <div className="map-station">
                <Citymap lat={weatherData.latitude} lon={weatherData.longitude}/>
                <Station weatherData={weatherData}/>
            </div>
        )
    }
}

export default MapStation;