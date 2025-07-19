import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";





export const ContadorSimple = (props) => {
console.log(props);
    return (
        <div className="container">
            <div className="numerico">{props.digitos}</div>
        </div>
    )
}

