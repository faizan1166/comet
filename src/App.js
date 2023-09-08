import "./App.css";
import Features from "./Component/Features";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
        <Home />
        <Features />
      </div>
    </>
  );
}

export default App;
