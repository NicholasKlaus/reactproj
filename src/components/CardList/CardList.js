import React from 'react';
import './CardList.css';
import { WeatherCard } from "../index";
import { WeatherSlider } from '../WeatherSlider/WeatherSlider';

export const CardList = ({ data }) => (
  <div className="card-list">
    <WeatherSlider>
      {data.map((el, key) => {
        return (
          <WeatherCard el={el} key={key}/>
        );
      })}
    </WeatherSlider>
  </div>
)