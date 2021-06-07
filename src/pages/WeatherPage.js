import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { MainLayout, CardList, ErrorMessage } from "../components/index";
import { formatWeekDay, formatDate } from '../helpers/timeHelper';
import { useQuery } from '../helpers/QueryString';

export const WeatherPage = () => {
  const {REACT_APP_API_URL, REACT_APP_API_KEY} = process.env;
  const query = useQuery();
  const url = `${REACT_APP_API_URL}onecall?lat=${query.lat}&lon=${query.lon}&units=metric&exclude=current,minutely,hourly&appid=${REACT_APP_API_KEY}`;
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weekDay, setWeekDay] = useState(null);
  const [weekDayDate, setWeekDayDate] = useState(null);
  const [wReqFail, setWReqFail] = useState(false);

  useEffect(() => {
    if (weatherData.length && weatherData[0].dt) {
      setWeekDayDate(formatDate(weatherData[0].dt))
      setWeekDay(formatWeekDay(weatherData[0].dt))
    }
  }, [weatherData, weekDay, weekDayDate])

  useEffect(() => {
    getWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData.length) {
      setLoading(false);
    }
  }, [weatherData]);

  function getWeatherData() {
    fetch(url)
    .then(res => res.json())
    .then(weather => setWeatherData(weather.daily))
    .catch(err => {
      setWReqFail(true);
    });
  }

  return (
    <div className="weather">
      <MainLayout>
        <div className="container">
          {
            wReqFail ?
              <ErrorMessage />
            :
            loading ?
              <div className="spinner-wrap">
                <Spinner animation="border" variant="light" role="status" />
              </div>
            :
            (
              <div className='w-body'>
                <div className="w-body__top">
                  <Row>
                    <Col sm={6}>
                      <div className="w-list_left_wrap">
                        <ul className="w-left_content">
                          <li>
                            <span className="w-data_date">{weekDayDate} {weekDay}</span>
                          </li>
                          <li>
                            <h2 className="w-data_temperature">Day {Math.round(weatherData[0].temp.day)}&deg;C</h2>
                            <h3 className="w-data_temp-feels">Feels like {Math.round(weatherData[0].feels_like.day)}&deg;C</h3> 
                          </li>
                          <li>
                            <h4 className="w-data">Humidity - {weatherData[0].humidity}%</h4> 
                          </li>
                          <li>
                            <h4 className="w-data">Air Pressure - {weatherData[0].pressure}ps</h4> 
                          </li>
                          <li>
                            <h4 className="w-data">Wind Speed - {weatherData[0].wind_speed}km/h</h4> 
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="city-name__wrap">
                        <h1 className="w-data_city-name">{query.name}</h1>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="w-body__bottom">
                  <CardList data={weatherData}/>
                </div>
              </div>
            )
          }
        </div>
      </MainLayout>
    </div>
  );
}