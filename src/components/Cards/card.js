import { element } from 'prop-types';
import React from 'react';
import './card.css';


function Card({el}){

    return(
        <div className="w-card">
            <div className="w-card_body">
               
                <span><img src ={` http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} ></img></span>
                <h1 className='card_title'>День {el.temp.day}&deg;C </h1>
                <span>Monday</span>
                
            </div>
        </div>
    );
}

export default Card;