import React, {useState} from "react";
import getData from "../functional/getData";
import DataRetrieving from "../layout-component/DataRetrieving";
import Reload from "../layout-component/Reload";

function Button(){
    var [showDataRetrieving, setShowDataRetrieving] = useState(false);

    const handleButtonClick = () => {
        // Set the showDataRetrieving state to true to render the DataRetrieving component
        setShowDataRetrieving(true);
    };
    return(
        <React.Fragment>
                    <button type="submit" onClick={handleButtonClick} className="btn btn-success button-additions"><i
                        className="fa-solid fa-magnifying-glass"></i></button>
        </React.Fragment>
    )


}

export default Button;