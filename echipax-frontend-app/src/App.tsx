import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LogInSignUp from "./Components/LogInSignUp/LogInSignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LogInSignUp />
    </div>
  );
}

export default App;
