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
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  };
  const handleStart = (event) => {
    setRenderBall(true);
    document.addEventListener("keydown", handleKeyPress);
  };
  const handleKeyPress = (event) => {
    console.log(event.key);
    if (event.keyCode === 39) {
      setX({ x: `${x} + 5` });
      setBallPosition({
        ballPosition: { left: `${x}px`, top: `${y}px` }
      });
    } else if (event.keyCode === 40) {
      setY({ y: `${y}-5` });
      setBallPosition({
        ballPosition: { left: `${x}px`, top: `${y}px` }
      });
    } else if (event.keyCode === 38) {
      setY({ y: `${y}+5` });
      setBallPosition({
        ballPosition: { left: `${x}px`, top: `${y}px` }
      });
    } else if (event.keyCode === 37) {
      setX({ x: `${x}-5` });
      setBallPosition({
        ballPosition: { left: `${x}px`, top: `${y}px` }
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
