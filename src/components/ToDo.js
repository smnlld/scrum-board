import React from "react";

const ToDo = ({ events, setEvent, statusEvents }) => {
  return (
    <div>
      <h3>TO DO</h3>
      {events &&
        events.map((event) => {
          if (event && event.status === "New Event") return;
          <>
            <p key={event.id}>
              {event.title}{" "}
              <button
                key={event.id}
                onClick={() => {
                  statusEvents(event.id, "To Do");
                }}
              >
                Set To Do
              </button>
            </p>
          </>;
        })}
    </div>
  );
};

export default ToDo;
