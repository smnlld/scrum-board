import React from "react";

export const Pending = ({ events, statusUpdate, setEvents }) => {
  const newFunction = (events) => {
    newFunction = statusUpdate;
  };
  return (
    <>
      <div className="border sm:text-center w-auto column-1">
        <span className="text-3xl">NEW EVENTS</span>
        {events?.map((event) => {
          if (event && event.status === "Pending")
            return (
              <div className="border sm:text-center">
                <div key={event.id}>
                  <h2>{event.title}</h2>
                  <p>
                    {event.description}
                    <h3> {event.status}</h3>
                  </p>
                  <button
                    className="bg-green hover:bg-yellow text-white font-bold py-2 px-4 rounded "
                    key={event.id}
                    onClick={() => {
                      statusUpdate(event.id, "Todo");
                    }}
                  >
                    TO DO
                  </button>
                </div>
              </div>
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
