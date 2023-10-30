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

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleSquareClick = (clickedSquareIndex) => {
    // create var holding copy of current state
    let updatedBoard = [...board];
    // set condition for if treasure location is same as clicked square
    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "🍀";
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "🗿";
      // setBoard(updatedBoard)
    } else {
      updatedBoard[clickedSquareIndex] = "☘️";
      // setBoard(updatedBoard)
    }
    setBoard(updatedBoard);
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
