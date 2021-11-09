import React from "react";
import Cell from "./Cell";
import PlayerMove from "./PlayerMove";
import WindowResult from "./WindowResult";

const Board = (props) => {
  return (
    <div className="container ">
      <WindowResult
        currPlayer={props.state.currPlayer}
        isWin={props.state.isWin}
        isDraw={props.state.isDraw}
        setState={props.setState}
      />
      <PlayerMove currPlayer={props.state.currPlayer} />
      <div className="board">
        {props.state.board.map((c, index) => (
          <Cell
            key={index}
            index={index}
            value={c}
            state={props.state}
            setState={props.setState}
            currPlayer={props.state.currPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
