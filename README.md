# Tic-Tac-Toe Extension

## Extension: Highlight Winning Line
I modified `calculateWinner` to return both the winner and the winning line indices.
In `App.jsx`, I used that information to visually highlight the three winning squares
with a green background and yellow ring effect.

## How to Use
1. Click on the squares to play Tic-Tac-Toe.
2. The app automatically detects a winner and highlights the winning line.
3. Click “Play Again” to reset the board.

## Files Changed
- `lib.js`: Updated `calculateWinner` to return `winner` and `line`.
- `App.jsx`: Highlighted winning squares and added tie/winner message.
- `README.md`: Updated documentation.

## What I Learned
- How to pass props (`isWinning`) to child components.
- How to conditionally style components using Tailwind.
- How to return multiple values from a function using an object.

## Challenges
- Making sure the highlight effect only applied to the correct winning line.

