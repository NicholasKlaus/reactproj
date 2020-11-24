import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/WeatherPage/weatherStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Header from '../components/Header/header';
import CardList from '../components/Cards/card-list'
import NavButtons from '../components/Buttons/button';
import Loader from '../components/Loader/loader';

function Weather() {
  const API_key = "3b71725b59ef23dd71e0c2b33a1e16ee";
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=48.5463880&lon=22.9958100&units=metric&exclude=current,minutely,hourly&appid=${API_key}`;
  //const url = `https://api.openweathermap.org/data/2.5/forecast?lat=48.547222&lon=22.986389&units=metric&appid=${API_key}`;
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    getAnotherWeather();
    
  }, [])
  

  function getAnotherWeather() {
    fetch(url)
      .then(res => res.json())
      //.then(weather => setWeatherData(weather.list))
      .then(weather => {
        setWeatherData(weather.daily)
        setLoading(false)
      })
      .catch(err => {
        throw new Error(err.message)
      });
  }

  console.log(weatherData[0]);
  

  return (
    <div className = "weather" >
      <Header isWeather = { true } />
      <div className = "container" >
        <div className = 'w-body' >
          <div className = "w-body__top" >
            <Row>
              <Col sm = { 6 }>
                <div className = "w-list_leftWrap" >
                  <ul className = "w-leftPanelList" >
                    <li>
                      {loading && <Loader />}
                      {/* <h2> { weatherData[0].dt } </h2>
                      <span>Monday</span>
                      <h1>28 &deg;C</h1>
                      <span>Change Location</span> */}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm = { 6 }>
                <div className = "w-list_rightWrap" >
                  <ul className = "w-rightPanelList" >
                    <li className = 'w-listItem' >
                      <span>Humidity</span>
                      <h2>50%</h2>
                    </li>
                    <li className = 'w-listItem' >
                      <span>Air Pressure</span>
                      <h2>1009.483 ps</h2>
                    </li>
                    <li className = 'w-listItem' >
                      <span>Chance of Rain</span>
                      <h2>0%</h2>
                    </li>
                    <li className = 'w-listItem' >
                      <span>Wind Speed</span>
                      <h2>1.4km/h</h2>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className = "w-body__bottom" >
            <CardList data = { weatherData } />
            <NavButtons/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;