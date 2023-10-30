import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import "./App.css";
// import grinch from "./images/grinch.png"
// import { click } from "@testing-library/user-event/dist/click"
                

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
  const [guesses, setGuesses] = useState(5);

  const [gameOver, setGameOver] = useState(false);

  const handleSquareClick = (clickedSquareIndex) => {
    if (gameOver) {
      return;
    }
    // create var holding copy of current state
    let updatedBoard = [...board];
    // set condition for if treasure location is same as clicked square
    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "🎁";
      setGameOver(true);
      alert("Congratulations! You found the treasure!");
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "🤡";
      // setGameOver(true);;
      setGameOver(true);
      alert("Game over! Try again!");
      // setBoard(updatedBoard)
    } else {
      updatedBoard[clickedSquareIndex] = "👣";
      // setBoard(updatedBoard)
    }
    setBoard(updatedBoard);
    setGuesses((prevGuesses) => prevGuesses - 1);
  };
   useEffect(() => {
    // hook that ensures game over logic runs after each state update has rendered
    if (guesses === -1) {
      setGameOver(true);
      alert("Out of turns! Game over!");
    }
  }, [guesses]);

  const handlePlayAgain = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setGuesses(5);
    setGameOver(false);
  };

  return (
    <>
      <h1>The Grinch Stole Christmas!</h1>
      <div className="gameRules">
        The Grinch has stolen all of the presents from under the tree! Follow the path he took and get back the presents! But be careful, he's left a trap for us! 
      </div>
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
      <button className="playButton" onClick={handlePlayAgain}>Play Again!</button>
      <p className="remGuesses">Remaining Guesses: {guesses} </p>
      {/* <button onClick={handlePlayAgain}>Play Again!</button> */}
      <footer>&copy;Zenia Varela | Hotel 2023 | Learn Academy</footer>
    </>
    
  );
};

export default App;
