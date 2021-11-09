export const initialState = {
  board: [null, null, null, null, null, null, null, null, null],
  currPlayer: "X",
  isWin: false,
  isDraw: false,
};

export const combo = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
