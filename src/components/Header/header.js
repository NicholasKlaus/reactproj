import React from 'react';
import './header.css';
import {BrowserRouter as Switch, Link} from 'react-router-dom';

export default function Header(){
    return(
       <div className="header">
            <div className="h-body">
                <div className="h-title">App</div>
                <ul className="h-menu_list">
                    <Link to="/tasks" className="h-menu_link">Tasks</Link>
                    <Link to="/weather" className="h-menu_link">Weather</Link>
                    
                </ul>
           </div>
       </div>
    );
}