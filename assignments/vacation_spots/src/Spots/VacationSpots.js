import React, { Component } from 'react';

function VacationSpots(props){
  let vacations = props.vacationSpots;
  return(
    <div>
      {vacationSpots.map()}
      <h1>{vacations.place}</h1>
    </div>
  )
}

export default VacationSpots;