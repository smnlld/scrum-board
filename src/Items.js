import React, { useState } from "react";

//Components imports
import { Header } from "./components/Header";
import { Pending } from "./components/Pending";
import { ToDo } from "./components/ToDo";
import { Completed } from "./components/Completed";
import { AddEvent } from "./components/AddEvent";

export const Items = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      description: "This is the first event",
      status: "Pending",
    },
    {
      id: 2,
      title: "Event 2",
      description: "This is the second event",
      status: "Pending",
    },
    {
      id: 3,
      title: "Event 3",
      description: "This is the third event",
      status: "Pending",
    },
  ]);

  //Status Changer Function
  const statusUpdate = (id, newStatus) => {
    // console.log(id, newEvent);
    let updater = events;
    updater = updater.map((event) => {
      if (event.id === id) {
        console.log("in here");
        event.status = newStatus;
      }
      return event;
    });
    setEvents(updater);
  };

  //Adding new Event to the list
  const addEvent = (event) => {
    console.log(events);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEvent = { id, ...event };
    setEvents([...events, newEvent]);
  };

  //Delete Event
  const deleteEvent = (id) => {
    console.log(events);
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className=" mx-auto h-auto w-auto bg-red-100 max-h-full ">
      <div className="sm:text-center ">
        <Header onAdd={() => setShowAddEvent(!showAddEvent)} />
      </div>
      {showAddEvent && <AddEvent onAdd={addEvent} />}
      <div className="mx-auto h-[400px] w-[500px] flex justify-center items-center bg-blue-500 relative p-[10px]">
        <div className="static ...">
          <div className="inline-block ...">
            {events.length > 0 ? (
              <Pending
                events={events}
                statusUpdate={statusUpdate}
                setEvents={setEvents}
              />
            ) : (
              "No events to show"
            )}
          </div>
          <div className="inline-block ...">
            <ToDo
              events={events}
              statusUpdate={statusUpdate}
              setEvents={setEvents}
            />
          </div>
          <div className="inline-block ...">
            <Completed
              events={events}
              statusUpdate={statusUpdate}
              setEvents={setEvents}
              onDelete={deleteEvent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Items;
// {showAddInfo && <AddInfo onAdd={addInfo} />}
//       {infos.length > 0 ? (
//         <Infos info={infos} onDelete={deleteInfo} />
//       ) : (
//         "No infos to show"
//       )}
