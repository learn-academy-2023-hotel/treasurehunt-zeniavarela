import React from "react";

const Square = ({ value, index, handleSquareClick }) => {
  //  destructuring props
  // const { value } = props is the same as props.value, instead pass through parenthesis on line 3

  const handleClick = () => {
    handleSquareClick(index);
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        {value}
      </div>
    </>
  );
};
export default Square;
