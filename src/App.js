import "./App.css";
import Features from "./Component/Features";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Navbar />
        <Home />
        <Features />
      </header>
    </div>

  );
}

export default App;
