import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main-layout.css';

function MainLayout(){

    return(
        <div className = "main-layout" >
            
        </div>
    );
}

export default MainLayout = (props) => (
    <div className = "main-layout">
        { props.children }
    </div>
);
