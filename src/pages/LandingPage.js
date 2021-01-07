import React, {useState} from "react";
import {BrowserRouter as Switch, NavLink} from 'react-router-dom';
import {
    InputGroup,
    FormControl,
    Button,
} from "react-bootstrap";

export const LandingPage = () => {
    let arr = [
        { city: "Свалява", zip: 89300}, {city: "Солочин", zip: 89321}, {city: "Сасівка", zip: 89309}, {city: "Солотвино", zip: 90575}, {city: "Сваричів", zip: 77605}
    ] 
    
    const [filteredCities, setfilteredCities] = useState([]);

    const onInput = (event) => {
        let filtredData = arr.filter(el =>  el.city.startsWith(event.target.value))
        if (!event.target.value) {
            setfilteredCities([]);
        } else {
            setfilteredCities(filtredData);
        }
    };   
    
    return(
        <div className="landing">
            <div className="container">
                <NavLink 
                    to="/WeatherPage" 
                    activeStyle= {{
                        color: " #c2bdbd",
                    }}
                >
                See weather
                </NavLink>
                <div className="l-body">
                    <div className="autocomplete-seach_wrap">
                        <div className="c-search_wrapper">
                            <i className="icofont-search-2 search-icon"></i>
                            <input 
                                type="search" 
                                name="searchBar" 
                                placeholder="Search" 
                                className="search-bar"
                                onInput= {onInput}
                            ></input>
                        </div>
                        <ul className="dropdown-list">
                            {   
                                filteredCities.map((el, key) => {
                                    return (
                                    <li className="list-item" el= {el} key= {key}> {el.city} </li>
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