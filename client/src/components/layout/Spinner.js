import React from "react";
import spinner from "./spinner.gif";

function Spinner(){
    return(
        <React.Fragment>
            <img src={spinner} alt="Loading....." style={{width: "600px", margin: "auto", display: "block"}}/>
        </React.Fragment>
    );
}


export default Spinner;