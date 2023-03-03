import React from "react";

export const ToDo = ({ events, statusUpdate, setEvents }) => {
  return (
    <>
      <h1>TO DO</h1>
      {events &&
        events.map((event) => {
          if (event && event.status === "Todo")
            return (
              <>
                <div className="container" key={event.id}>
                  <h3>{event.title}</h3>
                  <p>
                    {event.description}
                    {event.status}
                  
                  <button
                    key={event.id}
                    onClick={() => {
                      statusUpdate(event.id, "Pending");
                    }}
                  >
                    TO DO
                  </button>
                  </p>
                </div>
              </>
            );
        })}
    </>
  );
};

