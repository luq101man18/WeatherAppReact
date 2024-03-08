import React, { useEffect } from "react";

function SunTimings({weatherData}){
    useEffect(() => {
        function setTheSunTimingBackground(){
            let sun = document.getElementById("sun-time");
            if(sun){
                sun.classList.add("sun-times");
                sun.classList.add("background-additions");
            }else{
                console.log("could not find sun-time");
            }

        }
        setTheSunTimingBackground();
    }, []);
    
    if(weatherData){
        return(
            <div className="sun-timings card-body" id="sun-time">
                <div className='card-body'>
                    <h3>Sunrise: {weatherData.currentConditions.sunrise}</h3> 
                    <h3> Sunset: {weatherData.currentConditions.sunset}</h3>
                </div>
            </div>

        )
    }
}


export default SunTimings;