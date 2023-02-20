import React, { useState } from "react";

//css imports
import "./App.css";

//Components imports
import { Header } from "./components/Header";
import Event from "./components/Event";
import Events from "./components/Events";

const App = () => {
  const [events, setEvents] = useState([
    {
      ID: 1,
      Title: "Event 1",
      Description: "This is the first event",
      Status: "To Do",
    },
    {
      ID: 2,
      Title: "Event 2",
      Description: "This is the second event",
      Status: "To Do",
    },
    {
      ID: 3,
      Title: "Event 3",
      Description: "This is the third event",
      Status: "To Do",
    },
  ]);

  //functionalities
  // const toDoEvents = (e) => {
  //   console.log(e.target.value);
  // };
  //   const {id, title, description, status} = e.target.value;
  //   setEvents([...events, {id, title, description, status}]);
  // };
// oncClickHandler = function (e) {
//   console.log(e.target.value);
// };

  return (
    <div className="App">
      <Header />
      <div className="table-main">
        <h1>THIS IS THE EVENTS</h1>
        <Events event={events} />
      </div>
    </div>
  );
};

export default App;

// import { Board } from "./components/Board";
// import { AddForm } from "./components/AddForm";
