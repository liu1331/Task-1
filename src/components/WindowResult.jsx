const WindowResult = (props) => {
  const { setState } = props;
  return (
    <div
      className={
        "windowResult " + (props.isWin || props.isDraw ? "" : "hidden")
      }
    >
      <div className="windowResult-content">
        <div className="windowResult-title">
          {props.isDraw ? (
            <p>Draw</p>
          ) : (
            <p>Player {props.currPlayer === "O" ? "1" : "2"} Win</p>
          )}
        </div>
        <div className="windowResult-btn">
          <button
            onClick={(e) =>
              setState((prevState) => ({
                board: Array(9).fill(null),
                isWin: false,
                isDraw: false,
                currPlayer: "X",
              }))
            }
          >
            Play again
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowResult;
