import { describe, expect, test } from "vitest";
import { calculateWinner } from "./lib.js";

describe("calculateWinner", () => {
  test("returns null for empty board", () => {
    const board = Array(9).fill(null);
    expect(calculateWinner(board)).toBeNull();
  });

  test("returns null for incomplete game", () => {
    const board = ["X", "O", "X", null, "O", null, null, null, null];
    expect(calculateWinner(board)).toBeNull();
  });

  test("returns null for full board with no winner (draw)", () => {
    const board = ["X", "X", "O", "O", "O", "X", "X", "O", "X"];
    expect(calculateWinner(board)).toBeNull();
  });

  describe("X wins", () => {
    test("top row", () => {
      const board = ["X", "X", "X", "O", "O", null, null, null, null];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [0, 1, 2] });
    });

    test("middle row", () => {
      const board = ["O", "O", null, "X", "X", "X", null, null, null];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [3, 4, 5] });
    });

    test("bottom row", () => {
      const board = ["O", "O", null, null, null, null, "X", "X", "X"];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [6, 7, 8] });
    });

    test("left column", () => {
      const board = ["X", "O", "O", "X", null, null, "X", null, null];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [0, 3, 6] });
    });

    test("middle column", () => {
      const board = ["O", "X", "O", null, "X", null, null, "X", null];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [1, 4, 7] });
    });

    test("right column", () => {
      const board = ["O", "O", "X", null, null, "X", null, null, "X"];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [2, 5, 8] });
    });

    test("diagonal top-left to bottom-right", () => {
      const board = ["X", "O", "O", null, "X", null, null, null, "X"];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [0, 4, 8] });
    });

    test("diagonal top-right to bottom-left", () => {
      const board = ["O", "O", "X", null, "X", null, "X", null, null];
      expect(calculateWinner(board)).toEqual({ winner: "X", line: [2, 4, 6] });
    });
  });

  describe("O wins", () => {
    test("top row", () => {
      const board = ["O", "O", "O", "X", "X", null, null, null, null];
      expect(calculateWinner(board)).toEqual({ winner: "O", line: [0, 1, 2] });
    });

    test("diagonal top-left to bottom-right", () => {
      const board = ["O", "X", "X", null, "O", null, null, null, "O"];
      expect(calculateWinner(board)).toEqual({ winner: "O", line: [0, 4, 8] });
    });
  });
});
