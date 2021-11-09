import React from "react";

const Cell = (props) => {
  const { state, value, currPlayer, setState, index } = props;

  function clickOnCell(e) {
    const newState = [...state.board];
    if (newState[index]) {
      return;
    }
    newState[index] = currPlayer === "O" ? "O" : "X";

    setState({
      ...state,
      board: [...newState],
      currPlayer: currPlayer === "X" ? "O" : "X",
    });
  }

  return (
    <div onClick={(e) => clickOnCell(e)} className="cell">
      {value}
    </div>
  );
};

export default Cell;
