import React from "react";
import Cell from "./Cell";
import PlayerMove from "./PlayerMove";
import WindowResult from "./WindowResult";

const Board = (props) => {
  return (
    <div className="container ">
      <WindowResult
        player={props.state.nextPlayer}
        isWin={props.state.isWin}
        isDraw={props.state.isDraw}
        setState={props.setState}
      />
      <PlayerMove player={props.state.nextPlayer} />
      <div className="board">
        {props.state.board.map((c, index) => (
          <Cell
            key={index}
            index={index}
            value={c}
            state={props.state}
            setState={props.setState}
            player={props.state.nextPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
