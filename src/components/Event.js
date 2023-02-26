import React, { useState } from "react";

const Event = ({ event ,addNewEvent}) => {
  const toDoEvents = () => {
    console.log(addNewEvent);
  };

  // setInfos(infos.filter((info) => info.id !== id));
  return (
    <>
    {event.map((event) => (
    <div className="container">
      <div>
      <h3>{event.Title}</h3>
        <p>{event.Description}</p>
        <p>{event.Status}</p>
        <p>
          <button onClick={addNewEvent}>TO DO</button>
        </p>
      </div>
    </div>
  )
  )}
  </>
  );
};

export default Event;
