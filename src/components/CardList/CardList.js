import React from 'react';
import './CardList.css';
import { WeatherCard } from "../index";

export const CardList = ({ data }) => {

  return (
    <div className="card-list">

      {data.map((el, key) => {
        return (
          <WeatherCard el={el} key={key}/>
        );
      })}
    </div>
  );
}