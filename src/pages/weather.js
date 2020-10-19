import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/WeatherPage/weatherStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Header from '../components/Header/header';



export default function Weather() {
    
    

    return (
        <div className="weather">
            <Header isWeather={true} />
    
            <div className="container">
                <div className='w-body'>
                    <div className="w-body__top">
                        <Row>
                            <Col sm={6}>
                                <div className="w-list_leftWrap">
                                    <ul className="w-leftPanelList">
                                        <li>
                                            <h2>time</h2>
                                            <span>Monday</span>
                                            <h1>28 &deg;C</h1>
                                            <span>Change Location</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="w-list_rightWrap">
                                    <ul className="w-rightPanelList">
                                        <li className='w-listItem'>
                                            <span>Humidity</span>
                                            <h2>50%</h2>
                                        </li>
                                        <li className='w-listItem'>
                                            <span>Air Pressure</span>
                                            <h2>1009.483 ps</h2>
                                        </li>
                                        <li className='w-listItem'>
                                            <span>Chance of Rain</span>
                                            <h2>0%</h2>
                                        </li>
                                        <li className='w-listItem'>
                                            <span>Wind Speed</span>
                                            <h2>1.4km/h</h2>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="w-body__bottom">
                        <div className="cards-wrap">
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>3pm</span>
                                    <h1>28 &deg;C</h1>
                                    <span>Monday</span>
                                </div>
                            </div>
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>4pm</span>
                                    <h1>28 &deg;C</h1>
                                    <span>Tuesday</span>
                                </div>
                            </div>
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>5pm</span>
                                    <h1>24 &deg;C</h1>
                                    <span>Wednesday</span>
                                </div>
                            </div>
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>6pm</span>
                                    <h1>17 &deg;C</h1>
                                    <span>Thursday</span>
                                </div>
                            </div>
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>7pm</span>
                                    <h1>11 &deg;C</h1>
                                    <span>Friday</span>
                                </div>
                            </div>
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>8pm</span>
                                    <h1>11 &deg;C</h1>
                                    <span>Saturday</span>
                                </div>
                            </div>
                            <div className="w-card">
                                <div className="w-card_body">
                                    <span>9pm</span>
                                    <h1>5 &deg;C</h1>
                                    <span>Sunday</span>
                                </div>
                            </div>
                        </div>
                        <div className="button-wrap">
                            <button className="leftArrow"></button>
                            <button className="rightArrow"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}