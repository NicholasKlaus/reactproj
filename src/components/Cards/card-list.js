import React from 'react';
import './card-list.css';
import Card from './card';

function CardList({data}){
    console.log('data is:', data);
   
    return(
        <div className="card-list">
            {data.map((el, key) => {
                console.log(el.value);
                return(
                    <Card el={el} key={key}/>
                )
            })}
        </div>
    );
}

export default CardList;