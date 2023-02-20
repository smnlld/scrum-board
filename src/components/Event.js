import React, { useState } from "react";

const Event = ({ event }) => {
  const [events, setEvents] = useState([
    {
      ID: 1,
      Title: "Event 1",
      Description: "This is the first event",
      Status: "To Do",
    },
    {
      ID: 2,
      Title: "Event 2",
      Description: "This is the second event",
      Status: "To Do",
    },
    {
      ID: 3,
      Title: "Event 3",
      Description: "This is the third event",
      Status: "To Do",
    },
  ]);

  const toDoEvents = (e) => {
    const { title, description, status } = e.target.value;
    setEvents(toDoEvents, title, description, status);
  };

  return (
    <div className="container">
      <div className="table-main">
        <h3>{event.Title}</h3>
        <p>{event.Description}</p>
        <p>{event.Status}</p>
        <button onClick={toDoEvents}>TO DO</button>
      </div>
    </div>
  );
};
export default Event;
