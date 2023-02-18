import React from "react";

const Event = ({event}) => {
  return (
    <div>
      <h3>{event.Title}</h3>
      <p>{event.Description}</p>
      <p>{event.Status}</p>
    </div>
  );
};
export default Event;
