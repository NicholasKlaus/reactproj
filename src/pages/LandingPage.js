import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {ROUTES} from "../constants/routes";
import cities from "../assets/json/city.list.min.json";

export const LandingPage = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  const onInput = (event) => {
    let filtredData = cities.filter(el =>  el.name.startsWith(event.target.value)).slice(0,10)
    if (!event.target.value) {
      setFilteredCities([]);
    } else {
      setFilteredCities(filtredData);
    }
  };   
    
  return(
    <div className="landing">
      <div className="container">
        <header>
          <h1>Weather App</h1>
        </header>
                
        <div className="l-body">
          <div className="autocomplete-seach__wrap">
            <div className="c-search_wrapper">
              <i className="icofont-search-2 search-icon"></i>
              <input 
                type="search" 
                name="searchBar" 
                placeholder="Enter your city" 
                className="search-bar"
                onInput= {onInput}
                autoComplete="off"
              />
            </div>
            <ul className="dropdown-list">
              {   
                filteredCities.map((el, key) => {
                  return (
                    <li className="list-item"> 
                      <Link to={`${ROUTES.WEATHER}?lon=${el.coord.lon}&lat=${el.coord.lat}`} >
                        {el.name}, {el.country}
                      </Link> 
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