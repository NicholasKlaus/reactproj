import React from 'react';
import './card-list.css';
import Card from './card';

function CardList(){
    
    
    return(
        <div className="card-list">
           
           {/* {data.map((el) => {
               return (
                   <Card el={el}  />
               );
           })} */}

            <Card />
                
            
        </div>
    );
}

export default CardList;