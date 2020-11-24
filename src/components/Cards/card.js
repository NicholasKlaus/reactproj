import { number } from 'prop-types';
import React from 'react';
import './card.css';


function Card({el}){
    let ms = el.dt * 1000;
    let weekdayName = new Date(ms).toLocaleString('en', {weekday: 'long'});
    //================================================================
    //const reportDate = new Date(el.dt * 1000).getDate();
    let weekdayDate = new Date(el.dt * 1000).toLocaleString('en', {year: 'numeric', month: 'numeric', day: 'numeric'});
    //================================================================
    //const hours = new Date(el.dt * 1000).toLocaleString('uk', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
    // виводить 12:00 
    //================================================================
    //let feels_like = el.feels_like.day;
    //================================================================
    let today = new Date().toLocaleString('en', {year: 'numeric', month: 'numeric', day: 'numeric'});
    
    // if (today === weekdayDate){
    //     console.log('дати співпадають');
    // }

    return(
        <div className = { `w-card ${ (today === weekdayDate) ? 'active' : '' } ` } >
            <div className = "w-card_body" >
                <span> { weekdayName } </span>
                <span><img  src = { `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png` }  alt = 'icon' /></span>
                <h1 className = 'card_title' >Day { Math.round(el.temp.day) }&deg;C</h1>
                <span> { weekdayDate } </span>
            </div>
        </div>
    );
}

export default Card;