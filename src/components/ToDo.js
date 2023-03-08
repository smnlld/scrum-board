import React from "react";

export const ToDo = ({ events, statusUpdate, setEvents }) => {

  return (
    <div className="border sm:text-center w-auto">
    <span className="text-3xl">TO DO</span>
    {events?.map((event) => {
      if (event && event.status === "Todo")
        return (
          <>
            <div key={event.id} className="border sm:text-center">
              <h2>{event.title}</h2>
              <p>
                {event.description}
                <h3> {event.status}</h3>
              </p>
              <button
              className="bg-red-400 hover:bg-purple text-white font-bold py-2 px-4 rounded"
                key={event.id}
                onClick={() => {
                  statusUpdate(event.id, "Pending");
                }}
              >
                PENDING
              </button>
              <button
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
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

