var cityStorageFlag = false;
const apiKeyVisualCrossing = "FQ52NM2JK4JXEQZVGZJ3PS3HW"


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

export default getData;