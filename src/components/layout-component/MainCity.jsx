import React, { useEffect } from "react";

function MainCity({value, mainTemp, feelsTemp}){
        useEffect(() => {
        
        function setImages(value, index){
            if(value){
                var images = document.getElementById("weatherImage"+index.toString());
                if((value.icon.includes("cloudy"))) {
                    images.classList.add("cloudy");
                }else if (value.icon.includes("snow")){
                    images.classList.add("snow");
                }else if (value.icon.includes("rain")){
                    images.classList.add("rain");
                }else if (value.icon.includes("Overcast")){
                    images.classList.add("overcast");
                }
                else{
                    images.classList.add("clear");   
                }
            }
        }
        setImages(value, 0);
    });

    if(value){
        return(
            <div>
                <h3> Date: {value.datetime}</h3>
                <h2 className = "weather-details card-title"> Weather Description: {value.description}</h2>
                <h2 className = "weather-icon"> Weather Description: {value.icon}</h2>
                <h3 id = {"change-temp"} className = "card-text"> Temperature: {mainTemp}</h3>
                <h3 id = {"change-feels"}> Feels Like: {feelsTemp}</h3>
                <h3 className = "card-text"> Humidity: {value.humidity}</h3>
                <h3 className = "card-text"> Pressure: {value.pressure}</h3>
            </div>
        )
    }else{
        
    }
 
}

export default MainCity;