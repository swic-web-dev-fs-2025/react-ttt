# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview

- Stack: Vite + React + Tailwind CSS (v4) + ESLint (flat config) + Vitest.
- App type: single-page Tic-Tac-Toe game with pure game logic separated from UI.

Code architecture and structure

- Entry & mounting
  - src/main.jsx renders the app into #root with React StrictMode.
- UI (React)
  - src/app.jsx manages game state with useState: turn ("X"/"O") and squares (Array(9)).
  - Derived state: winner (from calculateWinner), isTie, hasGameStarted; helpers: handleClick(index), handleReset(), getStatusMessage().
  - Board is rendered as a 3x3 grid; individual Square is an inline component (presentational) receiving value and onClick.
- Game logic (pure utilities)
  - src/constants.js defines WINNING_INDICES (winning line index triplets).
  - src/lib.js exports calculateWinner(board) – a pure function scanning WINNING_INDICES for "X" or "O" and returning the winner or null.
  - This separation allows unit testing logic independently from the UI.
- Testing
  - src/lib.test.js uses Vitest (describe/test/expect) to validate calculateWinner across empty, in-progress, draw, and winning scenarios for both players; also includes an edge-case prioritization test.
