import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import {
  MainLayout,
  CardList,
} from "../components/index";
import { formatWeekDay, formatDate } from '../helpers/timeHelper';
import { useLocation } from 'react-router-dom';


export const WeatherPage = () => {
  const {REACT_APP_API_URL, REACT_APP_API_KEY, REACT_APP_API_OPT} = process.env;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=48.548531&lon=22.995781&units=metric&exclude=current,minutely,hourly&appid=3b71725b59ef23dd71e0c2b33a1e16ee`;
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weekDay, setWeekDay] = useState(null);
  const [weekDayDate, setWeekDayDate] = useState(null);

  useEffect(() => {
    if (weatherData.length && weatherData[0].dt) {
      setWeekDayDate(formatDate(weatherData[0].dt))
      setWeekDay(formatWeekDay(weatherData[0].dt))
    }
  }, [weatherData, weekDay, weekDayDate])

  useEffect(() => {
    getAnotherWeather();
  }, []);

  useEffect(() => {
    if (weatherData.length) {
      setLoading(false);
    }
  }, [weatherData]);

  function getAnotherWeather() {
    fetch(url)
      .then(res => res.json())
      .then(weather => setWeatherData(weather.daily))
      .catch(err => {
        throw new Error(err.message)
      });
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let lon = query.get('lon');
  let lat = query.get('lat')
  console.log(lon);
  console.log(lat);
  
  return (
    <div className="weather">
      <MainLayout>
        <div className="container">
          <div className='w-body'>
            {loading && <Spinner/>}
            <div className="w-body__top">
              <Row>
                <Col sm={6}>
                  <div className="w-list_left_wrap">
                    {
                      !weatherData.length ?
                        <Spinner/>
                        :
                        (
                          <ul className="w-left_content">
                            <li>
                              <span className="w-data_date">{ weekDayDate } { weekDay }</span>
                            </li>
                            <li>
                              <h2 className="w-data_temperature">Day {Math.round(weatherData[0].temp.day)}&deg;C</h2>
                              <h3 className="w-data_temp-feels">Feels like { Math.round(weatherData[0].feels_like.day) }&deg;C</h3> 
                            </li>
                            <li> <h4 className="w-data">Humidity - { weatherData[0].humidity }%</h4> </li>
                            <li> <h4 className="w-data">Air Pressure - { weatherData[0].pressure }ps</h4> </li>
                            <li> <h4 className="w-data">Wind Speed - {weatherData[0].wind_speed }km/h</h4> </li>
                          </ul>
                        )
                    }
                  </div>
                </Col>
                <Col sm={6}>
                  <h1 className="w-data_city-name">Svalyava</h1>
                </Col>
              </Row>
            </div>
            <div className="w-body__bottom">
              <CardList data={ weatherData }/>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}