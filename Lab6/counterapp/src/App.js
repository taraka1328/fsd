import React, { useState } from "react";
import Button from "./button.jsx";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div className="title-container">
          <h2>COUNTER REACT APP</h2>
          <div className="title-underline"></div>
        </div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title="-" action={decrementCount} />
          <Button title="+" action={incrementCount} />
        </div>
      </div>
      <div class="watermark">P.Venkateswaramma'S</div>
    </div>
  );
}
