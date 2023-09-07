import "./App.css";
import Features from "./Component/Features";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Navbar />
      <Home />
      <Features />
    </div>
  );
}

export default App;
