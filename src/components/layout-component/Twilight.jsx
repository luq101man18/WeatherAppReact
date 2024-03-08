import React, { useEffect } from "react";

var currentTime = new Date();

function stringDateToNumDate(dateFromWeatherData, condition){
    let time = {};
    let splitTime = dateFromWeatherData.split(":");
    time["hours"] = parseInt(splitTime[0]);
    time["minutes"] = parseInt(splitTime[1]);
    time["seconds"] = parseInt(splitTime[2]);
    time["condition"] = condition;
    return time;
}

function getTimeDifference(sunTime, flag24issue = false){
    let difference = {};
    let hours = 0;
    if(flag24issue){
        hours = 24 - currentTime.getHours();
        hours += sunTime["hours"];
        difference["hours"] = Math.abs(hours);
    }else{
        difference["hours"] = Math.abs(sunTime["hours"]-currentTime.getHours());
    }
    difference["mintues"] = Math.abs(sunTime["minutes"]-currentTime.getMinutes());
    difference["condition"] = sunTime["condition"];
    return difference;
}

function invokeSunsetAndSunsetElements(weatherData){
    if(weatherData){
        let timeDifference = null;
        let sunrise = weatherData.currentConditions.sunrise;
        let sunset = weatherData.currentConditions.sunset;

        currentTime = new Date(new Date().toLocaleString('en-US', {timeZone: weatherData.timezone}))
        
        sunrise = stringDateToNumDate(sunrise, "sunrise");   
        sunset = stringDateToNumDate(sunset, "sunset");
        if((currentTime.getHours() < sunrise["hours"]) || (currentTime.getHours() > sunset["hours"])){
            let flag = false;
            if (currentTime.getHours() > sunset["hours"]){
                flag = true;
                timeDifference= getTimeDifference(sunrise, flag);
            }else{
                flag = false;
                timeDifference= getTimeDifference(sunrise, flag);
            }
        }else{
            timeDifference= getTimeDifference(sunset);
        }
        setSunDataIntoElements(timeDifference)
    }
}

function setSunDataIntoElements(time){
    let sun = document.getElementById("sunid");
    setSunBackground(time, sun);
    sun.innerHTML = "<h3 class='card-body'>Until " + time["condition"] + ": " + time["hours"] + " and " + time["mintues"] + "</h3>";   
}

function setSunBackground(time, devElement){
    time["condition"].includes("sunrise")?devElement.classList.add("sunrise"):devElement.classList.add("sunset");
}

function Twilight({weatherData}){
    useEffect(() => {
        invokeSunsetAndSunsetElements(weatherData);
    }, []);
    
    return(
        <div className="sun card-body" id="sunid"></div>
    )
}


export default Twilight;