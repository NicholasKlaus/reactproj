import React from 'react';
import './WeatherCard.css';
import { formatWeekDay, formatDate } from '../../helpers/timeHelper';

export const WeatherCard = ({ el }) => {
  let weekdayName = formatWeekDay(el.dt);
  let weekdayDate = formatDate(el.dt);
  let today = formatDate(new Date());

  return (
    <div className={`w-card ${(today === weekdayDate) ? 'active' : ''} `}>
      <div className="w-card_body">
        <span> {weekdayName} </span>
        <span><img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt='icon'/></span>
        <h1 className='card_title'>Day {Math.round(el.temp.day)}&deg;C</h1>
        <span> {weekdayDate} </span>
      </div>
    </div>
  );
}