import React, { useEffect } from "react";
import MainCity from "./MainCity";
import Forecast from "./Forecast";
import {mainTemps, settingFehrenheitSecondaryFrames, toCelsiusSecondaryFrames,  getTempC, getTempF, getFeelsC, getFeelsF, getFeels, setFeels, setFeelsC, setFeelsF, setTempC, setTempF, toCelsiusFeels, toCelsius } from "../main-components/Toggle";

function Nextto({weatherData}){
    if(weatherData){
        weatherData.days.slice(0,6).forEach(day => {
           mainTemps.push(day.temp);
        });
        setTempF(mainTemps[0]);
        setFeelsF(weatherData.days[0].feelslike);
        setFeelsC(toCelsiusFeels());
        setTempC(toCelsius());
        settingFehrenheitSecondaryFrames();
        toCelsiusSecondaryFrames();
        return (
            <div className="nextto">
                <div className="form-city" id="weatherImage0">
                    <div className="card-body">
                        <div className="weatherDescribtion" id="result">
                            <MainCity value={weatherData.days[0]} mainTemp={weatherData.days[0].temp} feelsTemp={weatherData.days[0].feelslike} />
                        </div>
                    </div>
                </div>
                <div className="nextto forecast-list" id={'forecast'}>
                    {weatherData && weatherData.days.slice(1, 6).map((day, index) => (
                        <Forecast value={day} mainTemp={day.temp} index={index+1} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Nextto;