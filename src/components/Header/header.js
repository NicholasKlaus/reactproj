import React, {useState, useEffect} from 'react';
import './header.css';
import {BrowserRouter as Switch, NavLink} from 'react-router-dom';


function Header({isWeather}){
    const [className, setClassName] = useState("header");


    useEffect(function(){
        setClassName(isWeather === true ? 'w-header' : 'header');
    }, [isWeather])
    console.log(isWeather);
   

    return(
       <div className={className}>
            <div className="h-body">
                <div className="h-title">App</div>
                <ul className="h-menu_list">
                    <NavLink 
                        to="/tasks" 
                        className="h-menu_link" 
                        activeStyle={{
                            color: "Black"
                        }}
                    >Tasks</NavLink>
                    <NavLink 
                        to="/weather" 
                        className="h-menu_link"
                        activeStyle={{
                            color: "Black",
                           
                        }}
                    >Weather</NavLink>
                    
                </ul>
           </div>
       </div>
    );
}
// const AdaptiveHeader = withRouter(Header)
export default Header