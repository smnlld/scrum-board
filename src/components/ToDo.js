import React from "react";

const ToDo = ({ event, events, statusUpdate, setEvents }) => {
  return (
    <div>
      {
        events && events.map(event => {
          if (event && event.status === 'New Status') 
          return <> <h3>{event.Title}</h3>
          <p>{event.Description}</p>
          <p>{event.Status}</p>
          <p>
            <button onClick={statusUpdate}>TO DO</button>
          </p></>
      }
      )}
    </div>
  );
};

export default ToDo;
