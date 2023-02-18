import React from "react";

const Event = ({ event }) => {
  return (
    <div className="container">
      <div className="table-main">
      <h3>{event.Title}</h3>
      <p>{event.Description}</p>
      <p>{event.Status}</p>
      <button>TO DO</button>
      </div>
    </div>
  );
};
export default Event;
