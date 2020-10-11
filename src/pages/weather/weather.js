import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './weatherStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Weather() {

    return (
        <div className="weather">
            <header className='w-header'>
                <p className='w-header_title'>Weather</p>
            </header>
    
            <div className="w-body">
                <div className='container'>
                    <Row>
                        <Col sm={6}>
                            <div className="w-list_leftWrap">
                                <ul className="w-leftPanelList">
                                    <li>
                                        <h2>Fog</h2>
                                        <span>Khula City</span>
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
            </div>
        </div>
    );
}