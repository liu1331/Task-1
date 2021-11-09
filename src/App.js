import "./App.css";
import Board from "./components/Board";
import { useState, useEffect } from "react";
import { initialState, combo } from "./constants";

function App() {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    for (let i = 0; i < combo.length; i++) {
      let [a, b, c] = combo[i];
      if (
        state.board[a] &&
        state.board[b] === state.board[a] &&
        state.board[c] === state.board[a]
      ) {
        setState((prevState) => ({ ...prevState, isWin: true }));
      }
    }
    if (state.board.includes(null) === false) {
      setState((prevState) => ({ ...prevState, isDraw: true }));
    }
  }, [state.board]);

  return (
    <div className="App">
      <Board setState={setState} state={state} />
    </div>
  );
}

export default App;
