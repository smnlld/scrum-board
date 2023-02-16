import React from "react";

const Event = (event) => {
  return (
    <div className="task">
      <h3>{event.Title}</h3>
      <p>{event.Description}</p>
      <p>{event.Status}</p>
    </div>
  );
};
export default Event;
// const Event = (event) => {

//   export default Event;
