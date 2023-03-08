import React from "react";

export const Pending = ({ events, statusUpdate, setEvents }) => {
  const newFunction = (events)=> {
    newFunction = (statusUpdate);
  }
  return (
    <>
      <div className="table-main">
        <h1>NEW EVENTS</h1>
        {events?.map((event) => {
          if (event && event.status === "Pending")
            return (
              <>
                <div key={event.id} className="container">
                  <h2>{event.title}</h2>
                  <p>
                    {event.description}
                    <h3> {event.status}</h3>
                  </p>
                  <button
                  className="btn btn-blue"
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
      </div>
    </>
  );
};

// const Event = ({ event ,statusUpdate}) => {
//   const toDoEvents = () => {
//     console.log(statusUpdate); onClick={statusUpdate}
//   };

// setInfos(infos.filter((info) => info.id !== id));
