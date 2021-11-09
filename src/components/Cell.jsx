import React from "react";

const Cell = (props) => {
  const { state, value, player, setState, index } = props;

  function clickOnCell(e) {
    const newState = [...state.board];
    newState[index] = player ? "O" : "X";
    setState({
      ...state,
      board: [...newState],
      nextPlayer: !state.nextPlayer,
    });
  }

  return (
    <div onClick={(e) => clickOnCell(e)} className="cell">
      {value}
    </div>
  );
};

export default Cell;
