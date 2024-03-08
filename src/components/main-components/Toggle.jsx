import React, { useEffect } from "react";

var mainTemps = [];
var tempC = 0;

var tempF = 0;
var feels = 0;
var feelsC = 0;
var feelsF = 0;

var tempsC = [];
var tempsF = [];

export const setTempC = (value) => tempC = value;
export const getTempC = () => tempC;

export const setTempF = (value) => tempF = value;
export const getTempF = () => tempF;

export const setFeels = (value) => feels = value;
export const getFeels = () => feels;

export const setFeelsC = (value) => feelsC = value;
export const getFeelsC = () => feelsC;

export const setFeelsF = (value) => feelsF = value;
export const getFeelsF = () => feelsF;

function toFahrenheit() {
    tempF = (tempC / (5/9)) - 32;
    return tempF;
}

function toCelsius() {
    tempC = (tempF - 32) * (5/9);
    return tempC;
}

function toFahrenheitFeels() {
    feelsF = (feelsC / (5/9)) - 32;
    return feelsF;
}

function toCelsiusFeels() {
    feelsC = (feelsF - 32) * (5/9);
    return feelsC;
}

function secondaryToCelsius(value){
    let tempCsecond = (value - 32) * (5/9);
    return tempCsecond
}

function toFahrenheitSecondaryFrames() {     
    for (let index = 0; index < 5; index++) {
        tempsF.push(toFahrenheit(tempsC[index]));  
    }  
}

function toCelsiusSecondaryFrames() {
    tempsF.slice(1, 6).forEach(temp => {
        tempsC.push(secondaryToCelsius(temp));
    })
}

function settingFehrenheitSecondaryFrames() {
    mainTemps.slice(1, 6).forEach(temp => {
        tempsF.push(temp);
    })
}

function invokeToggle() {

    // toggle 
    var HideToggle = document.getElementById("toggle-temp");
    HideToggle.classList.remove("hide-toggle");
    HideToggle.classList.add("toggle");
    
    var toggle = document.getElementById("toggle");

    toggle.addEventListener('change', function() {
        let temp = 0;
        let feelsLike = 0;
        if (toggle.checked){
            temp = tempC;
            feelsLike = feelsC;
        }else{
            temp = tempF;
            feelsLike = feelsF;
        }

        let newTemp = document.getElementById("change-temp");
        let newFeels = document.getElementById("change-feels");
        
        newTemp.innerHTML = "Temperature: " + temp.toFixed(2);
        newFeels.innerHTML = " Feels Like: " + feelsLike.toFixed(2);

        for (let index = 1; index <= 5; index++) {
            
            if(mainTemps){
                if (toggle.checked){
                    mainTemps[index] = tempsC[index-1];
                }else{
                    mainTemps[index] = tempsF[index-1];
                }
            }


            var test = ("change-temp-second"+index).toString();                                                                                                      
            var secondaryTemps = document.getElementById(test);
            if(mainTemps[index]){
                secondaryTemps.innerHTML = mainTemps[index].toFixed(2);  
            }
            
        }

    })

}
function Toggle(){

    useEffect(() => {
        
        invokeToggle();
    }, []);
    return(
        <div className="hide-toggle" id="toggle-temp">
            <input type="checkbox" name="" className="toggle-custom" id="toggle"></input>
            <label for="toggle"></label>
        </div>
    )
}

export default Toggle;
export {mainTemps, toCelsiusSecondaryFrames, settingFehrenheitSecondaryFrames, toCelsius, toCelsiusFeels};

