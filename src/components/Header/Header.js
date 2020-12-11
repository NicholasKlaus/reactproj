import React, {useState, useEffect} from 'react';
import './Header.css';
import {BrowserRouter as Switch, NavLink} from 'react-router-dom';


export const Header = ({ isWeather }) => {
    const [className, setClassName] = useState("header");

    useEffect(function(){
        setClassName(isWeather === true ? 'w-header' : 'header');
    }, [isWeather])

    return(
       <div className = { className } >
            <div className = "h-body" >
                <div className = "h-title" >App</div>
                <ul className = "h-menu_list" >
                    <NavLink 
                        to="/tasks" 
                        className="h-menu_link" 
                        activeStyle={{
                            color: " #c2bdbd"
                        }}
                    >Tasks</NavLink>
                    <NavLink 
                        to="/weather" 
                        className="h-menu_link"
                        activeStyle={{
                            color: " #c2bdbd",
                        }}
                    >Weather</NavLink>
                </ul>
           </div>
       </div>
    );
}