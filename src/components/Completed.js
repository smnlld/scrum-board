import React from "react";

export const Completed = ({ events, statusUpdate, setEvents, onDelete }) => {
  return (
    <div className="border sm:text-center w-auto">
      <span className="text-3xl">COMPLETED</span >
      {events?.map((event) => {
        if (event && event.status === "Completed") {
          return (
            <>
              <div key={event.id} className="border sm:text-center">
                <h2>{event.title}</h2>
                <p>
                  {event.description}
                  <h3> {event.status}</h3>
                </p>
                <button
                  className="bg-green hover:bg-yellow text-white font-bold py-2 px-4 rounded"
                  key={event.id}
                  onClick={() => {
                    statusUpdate(event.id, "Todo");
                  }}
                >
                  Todo
                </button>
                <button
                  className="bg-red-400 hover:bg-purple text-white font-bold py-2 px-4 rounded"
                  key={event.id}
                  onClick={() => {
                    onDelete(event.id);
                  }}
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
