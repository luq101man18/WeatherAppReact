import React, { useEffect, useState} from "react";
import getData from "../functional/getData";
import Content from "./Content";


function DataRetrieving({city}){
    const [Wetherdata, setData] = useState();
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const retreivedData = await getData(city);
                setData(retreivedData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    }, []); 

    return(
        <div>
            <Content Data={Wetherdata} />
        </div>
    )
}

export default DataRetrieving;
