import React from "react";


function Alerts({value}){
    if(value){
        let newAlert = value.alerts[0];
        if(newAlert != null){    
            return(
                <div className="alerts alert alert-warning" id="alertsAdisory">
                    <p>{newAlert.event}</p> + 
                    <br></br> +
                    <p>{newAlert.headline}</p>
                </div>
            )

        }else{
            return(
                <div className="alerts alert alert-warning" id="alertsAdisory">
                    <p> There are no alerts, enjoy your day! </p>
                </div>
            )
            
        }
    }
}


export default Alerts;