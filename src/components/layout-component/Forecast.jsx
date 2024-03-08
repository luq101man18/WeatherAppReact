import React, { useEffect } from "react";



function Forecast({value, mainTemp, index}){

    useEffect(() => {
        
        function setImages(value, index){
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
        setImages(value, index);
    });


    return(
        
        <div className="forecast-background card-body" id={'weatherImage'+index}>
            <p className="card-text">{value.datetime}</p>
            <p className="card-title">{value.conditions}</p>
            <p id = {'change-temp-second'+index} className="card-text">{mainTemp}</p>
        </div>

    )
}
export default Forecast;