import React, {useState} from "react";
import {BrowserRouter as Switch, NavLink} from 'react-router-dom';
import {ROUTES} from "../constants/routes";
import cities from "../assets/json/city.list.min.json";

export const LandingPage = () => {
    // let arr = [
    //     { city: "Свалява", zip: 89300}, {city: "Солочин", zip: 89321}, {city: "Сасівка", zip: 89309}, {city: "Солотвино", zip: 90575}, {city: "Сваричів", zip: 77605}
    // ]
    const [filteredCities, setfilteredCities] = useState([]);

    const onInput = (event) => {
        let filtredData = cities.filter(el =>  el.name.startsWith(event.target.value))
        if (!event.target.value) {
            setfilteredCities([]);
        } else {
            setfilteredCities(filtredData);
        }
    };   
    
    return(
        <div className="landing">
            <div className="container">
                <header>
                    <h1>Weather App</h1>
                    <NavLink 
                        to={ROUTES.WEATHER} 
                        activeStyle= {{
                            color: " #c2bdbd",
                        }}
                    >
                    See weather
                    </NavLink>
                </header>
                
                <div className="l-body">
                    <div className="autocomplete-seach_wrap">
                        <div className="c-search_wrapper">
                            <i className="icofont-search-2 search-icon"></i>
                            <input 
                                type="search" 
                                name="searchBar" 
                                placeholder="Enter your city" 
                                className="search-bar"
                                onInput= {onInput}
                            ></input>
                        </div>
                        <ul className="dropdown-list">
                            {   
                                filteredCities.map((el, key) => {
                                    return (
                                        <li className="list-item" el= {el} key= {key}> 
                                            <NavLink 
                                                to={`${ROUTES.WEATHER}${el.coord.lat}${el.coord.lon}`} 
                                                activeStyle= {{
                                                    color: " #c2bdbd",
                                                }}
                                            >
                                            {el.name}, {el.country}
                                            </NavLink> 
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}