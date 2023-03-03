import React from "react";

export const Pending = ({ events, statusUpdate, setEvents }) => {
  return (
    <>
      <h1>NEW EVENTS</h1>
      {events &&
        events.map((event) => {
          if (event && event.status === "Pending")
            return (
              <>
                <div key={event.id} className="container">
                  <h3>{event.title}</h3>
                  <p>
                    {event.description}
                    {event.status}
                  </p>

                  <button
                    key={event.id}
                    onClick={() => {
                      statusUpdate(event.id, "Todo");
                    }}
                  >
                    TO DO
                  </button>
                </div>
              </>
            );
        })}
    </>
  );
};


// const Event = ({ event ,statusUpdate}) => {
//   const toDoEvents = () => {
//     console.log(statusUpdate);
//   };

// setInfos(infos.filter((info) => info.id !== id));
