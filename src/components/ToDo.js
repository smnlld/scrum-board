import React from "react";

export const ToDo = ({ events, statusUpdate, setEvents }) => {

  return (
    <div className="table-main">
    <h1>TO DO</h1>
    {events?.map((event) => {
      if (event && event.status === "Todo")
        return (
          <>
            <div key={event.id} className="container">
              <h2>{event.title}</h2>
              <p>
                {event.description}
                <h3> {event.status}</h3>
              </p>
              <button
                key={event.id}
                onClick={() => {
                  statusUpdate(event.id, "Pending");
                }}
              >
                PENDING
              </button>
              <button
                key={event.id}
                onClick={() => {
                  statusUpdate(event.id, "Completed");
                }}
                
              >
                COMPLETED
              </button>
            </div>
          </>
            );
        })}
      </div>
  );
};

