import React from 'react';
import './card-list.css';
import Card from './card';

function CardList({data}){

    //===============================5 day forecast 3 hours
    // const today = new Date();
    // const day = 60 * 60 * 24 * 1000;

    // const dateBins = [];
    // const nBins = 6; // there can be reports for up to 6 distinct dates

    // for (let i = 0; i < nBins; i++) {
    //     // set up a bin (empty array) for each date
    //     const date = new Date(today.getTime() + i * day);
    //     dateBins[date.getDate()] = [];
    // }

    // const reports = data;
    // for (const report of reports) {
    //     const reportDate = new Date(report.dt * 1000).getDate();
    //     dateBins[reportDate].push(report);
    // }
    // console.log(dateBins);
    //=====================================================================ends
    return(
        <div className= "card-list" >
           
           {data.map((el, key) => {
               return (
                   <Card el = { el } key = { key } />
                );
            })}

            {/* <Card /> */}
        </div>
    );
}

export default CardList;