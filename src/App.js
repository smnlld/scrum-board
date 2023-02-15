import "./App.css";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { AddForm } from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <Board />

    </div>
  );
}

export default App;
