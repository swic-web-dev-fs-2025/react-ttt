import { WINNING_INDICES } from "./constants.js";

/**
 * Determines the winner of a Tic-Tac-Toe board.
 *
 * Iterates over all predefined winning index triplets (WINNING_INDICES) and
 * returns the first player symbol ("X" or "O") that occupies all three
 * positions of any winning combination. If no player has yet satisfied a
 * winning pattern, returns null.
 *
 * @param {Array<"X" | "O" | null>} board
 * A 9-element array (indices 0-8) representing the board state.
 * Each entry is either "X", "O", or null (empty square).
 *
 * @returns {"X" | "O" | null}
 * "X" or "O" if that player has a winning line; otherwise null.
 *
 * @notes
 * - Pure function: does not mutate the incoming board.
 * - Stops early on the first detected winner.
 */
export const calculateWinner = (board) =>
  ["X", "O"].find((letter) =>
    WINNING_INDICES.some((winningIndices) =>
      winningIndices.every((winningIndex) => board[winningIndex] === letter)
    )
  ) || null;
