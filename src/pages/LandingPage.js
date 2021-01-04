import React, {useState} from "react";
import {BrowserRouter as Switch, NavLink} from 'react-router-dom';


export const LandingPage = () => {
    let arr = [
        { city: "Свалява", zip: 89300}, {city: "Солочин", zip: 89321}, {city: "Сасівка", zip: 89309}, {city: "Солотвино", zip: 90575}, {city: "Сваричів", zip: 77605}
    ] 
    
    const [filteredCities, setfilteredCities] = useState([]);

    const onInput = (event) => {
        let filtredData = arr.filter(el =>  el.city.startsWith(event.target.value))
        if (!event.target.value){
            setfilteredCities([]);
        }else {
            setfilteredCities(filtredData);
        }
    };   
    
    return(
        <div className ="landing">
            <div className ="container">
                <NavLink 
                to="/WeatherPage" 
                //className="h-menu_link"
                activeStyle={{
                    color: " #c2bdbd",
                }}
            >See weather</NavLink>
                <div className ="l-body">
                    <div className ="c-search_wrapper">
                        <input
                        type ="search" 
                        name ="searchBar" 
                        placeholder ="Search" 
                        className ="c-search_input"
                        onInput={onInput}
                        ></input>
                    </div>
                    <ul className="dropdown-list">
                        {   
                            filteredCities.map((el, key) => {
                                return (
                                    <li el={el} key={key}>{el.city}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}