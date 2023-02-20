import React, { useState } from "react";

const Event = ({ event, toDoEvents }) => {
  
  return (
    <div className="container">
      <div className="table-main">
        <h3>{event.Title}</h3>
        <p>{event.Description}</p>
        <p>{event.Status}</p>
        <p><button onClick={toDoEvents}>TO DO</button></p>x
      </div>
    </div>
  );
};
export default Event;
