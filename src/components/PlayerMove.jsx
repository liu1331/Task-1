import React from "react";

const PlayerMove = (props) => {
  return (
    <div className="playerMove">
      <div className="playerX">
        <p>X</p>
      </div>
      <div className="wrapper">
        <hr className="hr-line" />
        <div
          className={
            "bounce bouncePlayerMove " +
            (props.currPlayer === "X" ? "bounceMoveO" : "bounceMoveX")
          }
        ></div>
      </div>
      <div className="playerO">
        <p>O</p>
      </div>
    </div>
  );
};

export default PlayerMove;
