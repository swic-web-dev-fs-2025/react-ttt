import { WINNING_INDICES } from "./constants.js";

/**
 * Determines the winner of a Tic-Tac-Toe board.
 *
 * Iterates over all predefined winning index triplets (WINNING_INDICES) and
 * returns an object containing the player symbol ("X" or "O") and the first
 * winning line encountered in declaration order. If no player has yet satisfied
 * a winning pattern, returns null.
 *
 * @param {Array<"X" | "O" | null>} board
 * A 9-element array (indices 0-8) representing the board state.
 * Each entry is either "X", "O", or null (empty square).
 *
 * @returns {{ winner: "X" | "O"; line: number[] } | null}
 *   Object with winner letter and winning line indices, or null if no winner.
 *
 * @notes
 * - Pure function: does not mutate the incoming board.
 * - Stops early on the first detected winner (by WINNING_INDICES order).
 */
export const calculateWinner = (board) => {
  const winningIndices = WINNING_INDICES.find(([index1, index2, index3]) => {
    const currentSquare = board[index1];

    return (
      currentSquare &&
      currentSquare === board[index2] &&
      currentSquare === board[index3]
    );
  });

  return winningIndices
    ? { winner: board[winningIndices[0]], line: winningIndices }
    : null;
};
