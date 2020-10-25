import React from 'react';
import './card-list.css';
import Card from './card';

function CardList({data}){

    return(
        <div className="card-list">
            {data.map((el, key) => {
                return(
                    <Card el={el} key={key}/>
                )
            })}
        </div>
    );
}

export default CardList;