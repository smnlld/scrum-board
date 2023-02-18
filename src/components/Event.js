import React from "react";

const Event = (events) => {
  return (
    <div className="task">
      <h3>{events.Title}</h3>
      <p>{events.Description}</p>
      <p>{events.Status}</p>
    </div>
  );
};
export default Event;
// const Event = (event) => {

//   export default Event;
