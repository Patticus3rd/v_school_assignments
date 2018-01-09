import React, { Component } from 'react';
import Card from '../VacationSpots/Card';
import index from '../index';

function VacationSpots () {
    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: "$40",
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: "$900",
          timeToGo: "Winter"
        },{
          place: "China",
          price: "$1200",
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: "$1100",
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: "$400",
          timeToGo: "Spring"
        }
      ];

    
      

      
    return(
        <div>
            {vacationSpots.map((vacationSpot, index) => {
                return( <Card key={index}{...vacationSpot} index={index} />)
            })}
        </div>
    )
}


export default VacationSpots;