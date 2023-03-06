import React from "react";

export const Completed = ({ events, statusUpdate, setEvents, onDelete }) => {
  return (
    <div className="table-main">
      <h1>COMPLETED</h1>
      {events?.map((event) => {
        if (event && event.status === "Completed") {
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
                    statusUpdate(event.id, "Todo");
                  }}
                >
                  Todo
                </button>
                <button
                  key={event.id}
                  onDelete={onDelete}
                >
                  Delete
                </button>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};
