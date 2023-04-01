import React from "react";


const colors = ["Red","Green","Blue","Black","Yellow"];
const Basics1 = ()=>{

    return (
        <div>
          {colors.map((item)=>{
            return(
            <h3>{item}</h3>
                 );
        })}
        </div>

    );
}

export default Basics1;