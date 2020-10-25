import React from 'react';
import './card.css';


function Card({el}){

    return(
        <div className="w-card">
            <div className="w-card_body">
                <span>{el.value}</span>
                <h1>28 &deg;C</h1>
                <span>Monday</span>
            </div>
        </div>
    );
}

export default Card;