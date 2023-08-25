import React, { useState } from "react";
import ToggleInfo from "./ToggleInfo";


const Toggle = () =>{

    const [ind, setIndex] = useState(0);
    let n = ToggleInfo.length;
    
    setInterval(() => {
        console.log("before id is ", ind);
        setIndex((ind+1)%n);
        console.log("after ind is ", ind);
    }, 4000);
    return (
        <>
             <div className="tog-wrap">
                <div className="tog-image-box">
                    <img src={ToggleInfo[ind].image} className="tog-image"/>
                </div>
                
                <div className="text-wrap"> 
                    <h4>{ToggleInfo[ind].heading}</h4>
                    <p> {ToggleInfo[ind].description} </p>
                </div>
                
            </div>
        </>
    );
}
export default Toggle;