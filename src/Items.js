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
      title: "Study Basic JS",
      description: "This is for to excell in React",
      status: "Pending",
    },
    {
      id: 2,
      title: "Accomplish tasks",
      description: "Accomplish all the tasks on time",
      status: "Pending",
    },
    {
      id: 3,
      title: "Study Tailwind css and Graphs",
      description: "To implent to the Task",
      status: "Pending",
    },
  ]);

  //Status Changer Function
  const statusUpdate = (id, newStatus) => { 
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
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEvent = { id, ...event };
    setEvents([...events, newEvent]);
  };

  //Delete Event
  const deleteEvent = (id) => {
    console.log(events);
    setEvents(events.filter((event) => event.id !== id));
  };


  //counters 
    // let counters = events.length; 
    // if (events.status === 'Pending'){
    //   console.log(counters);
    // }
    // else if (events.status === 'Todo'){
    //   console.log(counters);
  return (
    <div className=" h-screen bg-[#2F4F4F] overflow-auto">
      <div className="sm:text-center text-white ">
        <Header onAdd={() => setShowAddEvent(!showAddEvent)} />
      </div>
      {showAddEvent && <AddEvent onAdd={addEvent} />}
      <div className="mx-auto h-[800px] w-[1000px] flex-center bg-[#708090] relative p-[10px]">
        <div className="grid grid-cols-3">
          <div className="container ...">
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
          <div className="container ...">
            <ToDo
              events={events}
              statusUpdate={statusUpdate}
              setEvents={setEvents}
            />
          </div>
          <div className="container ...">
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
