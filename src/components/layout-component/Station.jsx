import React from "react";



function Station({weatherData}){
    console.log(weatherData);
    let stations;
    if(weatherData){
        if(weatherData.stations){
            stations  = Object.values(weatherData.stations);    
            return(
                <div className="stations" id="stationsID">
                    <h3>Weather Stations</h3>
                        {stations.map(element => (
                            <h6>{element.name}</h6>
                            )
                        )
                    }
                </div>
            );
        }
    }

}


export default Station;