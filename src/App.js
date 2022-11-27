import "./App.css";

import { Toaster } from "react-hot-toast";

import NavBar from "./components/NavBar";
import DogFacts from "./components/DogFacts";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <NavBar />
      <DogFacts />
    </div>
  );
}

export default App;
