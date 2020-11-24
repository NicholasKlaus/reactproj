import React from 'react';
import './button.css';

function NavButtons(){

    return(
        <div className = "button-wrap" >
            <button className = "leftArrow" ><i className = "icofont-rounded-left icofont-2x" ></i></button>
            <button className = "rightArrow" ><i className = "icofont-rounded-right icofont-2x" ></i></button>
        </div>
    );
}

export default NavButtons;