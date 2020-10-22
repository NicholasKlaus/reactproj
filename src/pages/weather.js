import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/WeatherPage/weatherStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Header from '../components/Header/header';
import Card from '../components/Cards/card';
import NavButtons from '../components/Buttons/button';

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
                            <Card />
                            <Card />
                            <Card />
                            <Card />   
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <NavButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}