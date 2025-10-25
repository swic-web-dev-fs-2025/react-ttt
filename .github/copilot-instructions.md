# React Tic-Tac-Toe - Copilot Instructions

## Project Overview

Educational Tic-Tac-Toe game built with React 19, Vite, and Tailwind CSS 4. Demonstrates modern React patterns, functional programming, and comprehensive testing with Vitest.

## Architecture & Patterns

### State Management

- **Lift state up**: `App.jsx` owns all game state (`squares`, `turn`). Child components like `Square` are purely presentational and receive data/handlers via props
- **Immutable updates**: Always spread arrays before modifying: `const newSquares = [...squares]` (see `handleClick` in `App.jsx`)
- State is never mutated directly - this is a core React principle enforced throughout

### Code Organization

- **Business logic separation**: Pure functions in `src/lib.js` (e.g., `calculateWinner`) are separated from UI components
- **Constants in dedicated file**: `src/constants.js` holds `WINNING_INDICES` array used by game logic
- **Component pattern**: Prefer function components with hooks over class components

### Testing Philosophy

- Tests live alongside source: `lib.test.js` tests `lib.js`
- Comprehensive test coverage: See `lib.test.js` for exhaustive edge cases (empty board, draws, all 8 winning positions)
- Use Vitest's `describe` blocks to group related tests (e.g., "X wins", "O wins")

## ESLint Configuration

### Custom Rules

- **No console logs** except `console.warn`, `console.error`, `console.info`, `console.table`
- **Unused variables**: Allowed if uppercase/snake*case (e.g., constants): `varsIgnorePattern: "^[A-Z*]"`
- **Function hoisting**: Functions can be used before definition (`no-use-before-define` disabled for functions)
- **Auto-sort imports**: `perfectionist/sort-imports` enforces alphabetical import order
- **Modern JS required**: `prefer-const`, `no-var`, `prefer-arrow-callback`, `prefer-destructuring`

### Import Rules

- Imports must be first in file
- No duplicate imports
- No circular dependencies (`import/no-cycle`)

## Tech Stack Specifics

### React 19 Features

- Using concurrent features available in React 19
- Babel React Compiler enabled for automatic memoization

## Common Patterns to Follow

### Derived State

Calculate values from state rather than storing redundantly:

```javascript
const winner = calculateWinner(squares);
const isTie = !winner && squares.every((square) => square !== null);
const hasGameStarted = squares.some((square) => square !== null);
```

### Conditional Rendering

Use early returns in event handlers and ternary operators for UI:

```javascript
if (squares[index] || winner) return; // Guard clause

{
  winner || isTie ? "Play Again" : "Restart";
} // Ternary in JSX
```

### Array Generation

Use `Array.from` for iterating over indices:

```javascript
Array.from({ length: 9 }, (_, i) => <Square key={i} ... />)
```

## Project-Specific Notes

- Board indices are 0-8 (top-left to bottom-right, row-major order)
- `WINNING_INDICES` defines 8 winning combinations as index triplets
- X always goes first; turn alternates automatically
- Game is won on move completion (checked before turn switch)
