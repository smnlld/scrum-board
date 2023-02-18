import React, {useState} from "react";

//css imports
import "./App.css";

//Components imports
import { Header } from "./components/Header";
import Event  from "./components/Event";
import Events from "./components/Events";


const App = () => {
  const [events,setEvents] = useState([
  {
    ID: 1,
    Title: "Event 1",
    Description: "This is the first event",
    Status: "To Do"
  },
  {
    ID: 2,
    Title: "Event 2",
    Description: "This is the second event",
    Status: "To Do"
  },
  {
    ID: 3,
    Title: "Event 3",
    Description: "This is the third event",
    Status: "To Do"
  }
  ])

  return (

    <div className="App">
      <Header />
      <Events event={events} />
      {events.length > 0 ? (
        <Events event={events}/>
      ) : (
        "No infos to show"
      )}
    </div>
  );
}

export default App;

// import { Board } from "./components/Board";
// import { AddForm } from "./components/AddForm";