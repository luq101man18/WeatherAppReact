import React, {useEffect, useState} from "react";
import Footer from "./components/layout-component/footer";
import Homepage from "./components/layout-component/Homepage";
import Content from "./components/layout-component/Content";
import DataRetrieving from "./components/layout-component/DataRetrieving";
import getData from "./components/functional/getData";

function setPlaceholderToLastCity() {
    var cityInput = document.getElementById("city");
    if(cityInput){
        if (getLastCity() != null){
            cityInput.value = getLastCity();
        }
    }
}

function setLocalStorage(value){
    localStorage.setItem("city", value);
}

function getLastCity() {
    return localStorage.getItem("city");
}

function App(){
    const [city, updateCity] = useState(getLastCity());
    const [dataFound, fetchData] = useState(null);

    useEffect(()=>{
        async function fetchDataFromAPI(){
            try { 
                if(city){
                    let fetchedData = await getData(city);
                    
                    fetchData(fetchedData);
                }else{
                    console.log("no city was enterd or fetched");
                }

            } catch (error) {
                console.log(error);
            }
        }W
        fetchDataFromAPI();
        setPlaceholderToLastCity();
    }, [city]);

    setLocalStorage(city);
    return (
        <div>
            <Homepage fetchData={fetchData} updateCity={updateCity} />
            {city && dataFound?
            (
                <React.Fragment>
                    <Content Data={dataFound} />    
                </React.Fragment>
            ):(
                <React.Fragment></React.Fragment>
            )}
            
            <Footer />
        </div>
    );
}

export default App;