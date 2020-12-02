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
  let weekdayName = new Date();
  let weekdayDate = new Date();

  useEffect( () => {
    getAnotherWeather();
  }, []);

  useEffect( () => {
    if (weatherData.length) {
      console.log(weatherData[0].dt);
      setLoading(false);
    }
  }, [weatherData]);

  function getAnotherWeather() {
    fetch(url)
      .then(res => res.json())
      //.then(weather => setWeatherData(weather.list))
      .then(weather => setWeatherData(weather.daily))
      .catch(err => {
        throw new Error(err.message)
      });
  }

  console.log(weatherData);

  return (
    <div className = "weather" >
      <Header isWeather = { true } />
      <div className = "container" >
        <div className = 'w-body' >
          {loading && <Loader />}
          <div className = "w-body__top" >
            <Row>
              <Col sm = { 6 }>
                <div className = "w-list_left_wrap" >
                  {
                    !weatherData.length ?
                    <Loader />
                      :
                    (
                      <ul className = "w-left_content" >
                          <li>
                            <span><img  src = { `http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png` }  alt = 'icon' /></span>
                            <span> {  weekdayDate = new Date(weatherData[0].dt * 1000).toLocaleString('en', {year: 'numeric', month: 'numeric', day: 'numeric'}) } </span>
                            <span> { weekdayName = new Date(weatherData[0].dt * 1000).toLocaleString('en', {weekday: 'long'}) } </span>
                            <h2>Day {  Math.round(weatherData[0].temp.day) }&deg;C</h2>
                            <h2>Feels like { Math.round(weatherData[0].feels_like.day) }&deg;C</h2>
                        </li>
                      </ul>
                    )
                  }
                </div>
              </Col>
              <Col sm = { 6 }>
                <div className = "w-list_right_wrap" >
                  {
                    !weatherData.length ?
                    <Loader />
                      :
                    (
                      <ul className = "w-right_content" >
                        <li className = 'w-listItem' >
                          <span>Humidity</span>
                          <h2> { weatherData[0].humidity }%</h2>
                          <span>Air Pressure</span>
                          <h2> { weatherData[0].pressure }ps</h2>
                          <span>Wind Speed</span>
                          <h2> { weatherData[0].wind_speed }km/h</h2>
                        </li>
                      </ul>
                    )  
                  }
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