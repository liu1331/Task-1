const WindowResult = (props) => {
  console.log("window res render");
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
            <p>Player {props.player ? "1" : "2"} Win</p>
          )}
        </div>
        <div className="windowResult-btn">
          <button
            onClick={(e) =>
              setState((prevState) => ({
                board: Array(9).fill(null),
                isWin: false,
                isDraw: false,
                nextPlayer: false,
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
