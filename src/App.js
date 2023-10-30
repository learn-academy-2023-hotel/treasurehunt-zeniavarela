import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";

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
    // var that holds copy of current state
    let updatedBoard = [...board]
      // use index from clickedSquareIndex to update current square's value w an emoji
      updatedBoard[clickedSquareIndex] = "☘️"
      // update state with the new board
      setBoard(updatedBoard)
  };

  return (
    <>
      <h1>Find The Lucky Clover</h1>
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
