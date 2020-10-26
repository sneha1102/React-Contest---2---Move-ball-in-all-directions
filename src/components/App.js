import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall({ renderBall: false });
    setX({ x: 0 });
    setY({ y: 0 });
    setBallPosition({ ballPosition: { left: "0px", top: "0px" } });
  };
  const handleStart = (event) => {
    setRenderBall(true);
    document.addEventListener("keydown", handleKeyPress);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 39) {
      setX({ x: x + 5 });
      setBallPosition({
        ballPosition: { left: `${x}px` }
      });
    } else if (event.keyCode === 40) {
      setY(y - 5);
      setBallPosition({
        ballPosition: { top: `${y}px` }
      });
    } else if (event.keyCode === 38) {
      setY(y + 5);
      setBallPosition({
        ballPosition: { top: `${y}px` }
      });
    } else if (event.keyCode === 37) {
      setX(x - 5);
      setBallPosition({
        ballPosition: { lest: `${x}px` }
      });
    }
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
