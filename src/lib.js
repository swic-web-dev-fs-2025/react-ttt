import { WINNING_INDICES } from "./constants.js";

/**
 * Determines the winner of a Tic-Tac-Toe board and the winning line.
 *
 * @param {Array<"X" | "O" | null>} board
 * @returns {{ winner: "X" | "O" | null, line: number[] | null }}
 */
export const calculateWinner = (board) => {
  for (const line of WINNING_INDICES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line }; // ✅ Return both winner and line
    }
  }
  return { winner: null, line: null };
};
