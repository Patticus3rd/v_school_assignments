import React, { Component } from 'react';
import VacationSpots from './Spots/VacationSpots';

class App extends Component {
   vacationSpots = [  
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
  render() {
    return (
      <div>
        <h1>Vacation Spots</h1>
        <div> 
        <VacationSpots />
        </div>
      </div>
    );
  }
}

export default App;
