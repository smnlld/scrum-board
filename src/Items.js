import React, { useState } from "react";

//Components imports
import { Header } from "./components/Header";
import {Pending} from "./components/Pending";
import {ToDo} from "./components/ToDo";
import {Completed} from "./components/Completed";

export const Items = () => {
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
  return (
    <div className="App">
      <div>
      <Header />
      </div>
        <h1>THIS IS THE EVENTS</h1>
        <Pending
          events={events}
          statusUpdate={statusUpdate}
          setEvents={setEvents}
        />
        
      <ToDo events={events} statusUpdate={statusUpdate} setEvents={setEvents} />
      <Completed events={events} statusUpdate={statusUpdate} setEvents={setEvents} />
      </div>
    
  );
};
export default Items;