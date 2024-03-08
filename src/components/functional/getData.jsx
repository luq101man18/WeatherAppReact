import { useEffect, useState } from "react";
import Content from "../layout-component/Content";
import MainCity from "../layout-component/MainCity";
import DataRetrieving from "../layout-component/DataRetrieving";

var cityStorageFlag = false;
const apiKeyVisualCrossing = "FQ52NM2JK4JXEQZVGZJ3PS3HW"

function setPlaceholderToLastCity() {
    var cityInput = document.getElementById("city");
    if(cityInput){
        if (getLastCity() != null){
            cityInput.value = getLastCity();
        }
    }
}

function loadLastWeatherPage() {
    setPlaceholderToLastCity();
    getLastCityWeather(getLastCity());
}

function getLastCity() {
    return localStorage.getItem("city");
}

// use local storage
window.onload = loadLastWeatherPage();



async function getLastCityWeather(Lastcity){  
    let [city, resultData, forecast] = getDivs();        
        
    const urlVisualCrossing = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + Lastcity + "?key=" + apiKeyVisualCrossing;
    const responseVisualCrossing = await fetch(urlVisualCrossing)

    const dataVisualCrossing = await responseVisualCrossing.json(); 
    
    // local storage setting
    setLocalStorage(city);
    <Content Data={dataVisualCrossing} />
}
function setLocalStorage(value){
    if (!cityStorageFlag){
        localStorage.setItem("city", value);
    }
}
function handelEmptyError(value){
    // handel empty request
    if(value){
        const error = document.getElementById("error-content");
        const cityInput = document.getElementById("city");
        if (!value) {
            error.innerHTML = "You have to chose a city!";
            cityInput.classList.add("error-input");
            cityStorageFlag = true;
            clearContent();
            return;
        }else{
            error.innerHTML = "";
            cityInput.classList.remove("error-input");
            cityStorageFlag = false;  
            showContent();
        }
    }
}
function clearContent() {
    var weatherResultContent = document.getElementById("content");
    if(weatherResultContent){
        weatherResultContent.style.display = "none";
    }
   
}
function showContent() {
    var weatherResultContent = document.getElementById("content");
    if(weatherResultContent){
        weatherResultContent.style.display = "";
    }
    
}
  
async function getData(city) {
    try {
        // handel empty request
        handelEmptyError(city);

        const urlVisualCrossing = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?key=" + apiKeyVisualCrossing;
        const responseVisualCrossing = await fetch(urlVisualCrossing)

        // handel requet of a wrong city
        handelWrongCityError(responseVisualCrossing.status);

        const dataVisualCrossing = await responseVisualCrossing.json();     
       
        // local storage setting
        setLocalStorage(city);
        return (dataVisualCrossing);
    } catch (error) {
        console.error(error);
    }
}
function handelWrongCityError(value){
    if (value){
        const error = document.getElementById("error-content");
        const cityInput = document.getElementById("city");
        if(value === 400){
            error.innerHTML = "The city you chose does not exist!";
            cityInput.classList.add("error-input");
            cityStorageFlag = true;
            clearContent();
            return;
        }else{
            error.innerHTML = "";
            cityInput.classList.remove("error-input");
            cityStorageFlag = false;
            showContent();
        }
    }
}
function getDivs() {
    var city = document.getElementById("city").value.toLowerCase();
    var resultData = document.getElementById("result");  
    var forecast = document.getElementById("forecast");
    
    return [city, resultData, forecast];
}

export default getData;