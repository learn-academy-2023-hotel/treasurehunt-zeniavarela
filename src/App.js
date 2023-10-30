import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const handleSquareClick = (clickedSquareIndex) => {
    alert(clickedSquareIndex);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
