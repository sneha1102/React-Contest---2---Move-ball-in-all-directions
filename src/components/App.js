import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  let valueX = 0;
  let valueY = 0;
  const reset = () => {
    setRenderBall(false);
    valueX = 0;
    valueY = 0;
    setBallPosition({ left: "0px", top: "0px" });
  };
  const handleStart = (event) => {
    setRenderBall(true);
    document.addEventListener("keydown", handleKeyPress);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 39) {
      valueX += 5;
    } else if (event.keyCode === 37) {
      valueX -= 5;
    } else if (event.keyCode === 38) {
      valueY -= 5;
    } else if (event.keyCode === 40) {
      valueY += 5;
    }

    setBallPosition({ left: `${valueX}px`, top: `${valueY}px` });
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={handleStart}>
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
