import React, { useState } from "react";

//css imports
import "./App.css";

//Components imports
import { Header } from "./components/Header";
import Event from "./components/Event";
import Events from "./components/Events";
import ToDo from "./components/ToDo";

const App = () => {
  const [events, setEvents] = useState([
    {
      ID: 1,
      Title: "Event 1",
      Description: "This is the first event",
      Status: "New Event",
    },
    {
      ID: 2,
      Title: "Event 2",
      Description: "This is the second event",
      Status: "New Event",
    },
    {
      ID: 3,
      Title: "Event 3",
      Description: "This is the third event",
      Status: "New Event",
    },
  ]);
  const addNewEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEvent = { id, ...event.Status === "New Event" ? event.Status: "To Do" };
    setEvents([...events, newEvent]);
  };
  // const addInfo = (info) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newInfo = { id, ...info };
  //   setInfos([...infos, newInfo]);
  // };
  // const deleteInfo = (id) => {
  //   setInfos(infos.filter((info) => info.id !== id));
  // };
  return (
    <div className="App">
      <Header />
      <div className="table-main">
        <h1>THIS IS THE EVENTS</h1>
        <Event event={events} addNewEvent={addNewEvent} />
      </div>
      {/* <ToDo event={setEvents} onClick={oncClickHandler}/>   */}
      {/* <ToDo event={events} setEvents={setEvents} statusEvents={statusEvents} /> */}
    </div>
  );
};

export default App;

// oncClickHandler = function (e) {
//   console.log(e.target.value);
// };

// const toDoEvents = (e) => {
//   const { title, description, status } = e.target.value;
//   setEvents(toDoEvents, title, description, status);
// };

//code for changing status **NOT WORKING**
// const statusEvents =(id,newStatus) => {
//   let backlog = events;
//   backlog=backlog.map(event => event=>{
//     if(event.id === id){
//       console.log('event')
//       event.status = newStatus
//     }
//     return event;
//   })
//   setEvents(backlog)
// }
//functionalities

// const { id, title, description, status } = e.target.value;
// setEvents([...events, events, id, title, description, status]);
