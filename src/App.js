import "./App.css";

import { Toaster } from "react-hot-toast";

import NavBar from "./components/NavBar";
import DogFacts from "./components/DogFacts";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <NavBar />
      <DogFacts />
      <FooterPage />
    </div>
  );
}

export default App;
