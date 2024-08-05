import "./App.css";
import { useState } from "react";
import Progress_Bar from "./components/Progress_Bar";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>{show && <Progress_Bar />}</div>

      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
    </>
  );
}

export default App;
