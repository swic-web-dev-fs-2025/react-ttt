import { useState } from "react";
import { calculateWinner } from "./lib";

export default function App() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const result = calculateWinner(squares);
  const winner = result?.winner || null;
  const winningLine = result?.line || null;

  const hasGameStarted = squares.some((s) => s !== null);
  const isTie = !winner && squares.every((s) => s !== null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const newSquares = [...squares];
    newSquares[index] = turn;
    setSquares(newSquares);
    setTurn(turn === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setTurn("X");
  };

  const getStatusMessage = () => {
    if (winner) return `Winner: ${winner}! 🎉`;
    if (isTie) return "It's a tie! 🤝";
    return `Next player: ${turn}`;
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="flex flex-col items-center gap-6">
        <header className="text-3xl font-bold text-white">
          {getStatusMessage()}
        </header>

        <div className="relative grid grid-cols-3 w-fit gap-0">
          {/* Grid lines */}
          <div className="absolute left-0 right-0 h-1 bg-purple-500 top-[calc(33.333%-0.125rem)]" />
          <div className="absolute left-0 right-0 h-1 bg-purple-500 top-[calc(66.666%-0.125rem)]" />
          <div className="absolute top-0 bottom-0 w-1 bg-purple-500 left-[calc(33.333%-0.125rem)]" />
          <div className="absolute top-0 bottom-0 w-1 bg-purple-500 left-[calc(66.666%-0.125rem)]" />

          {Array.from({ length: 9 }, (_, i) => (
            <Square
              key={i}
              value={squares[i]}
              onClick={() => handleClick(i)}
              isWinning={winningLine?.includes(i)}
            />
          ))}
        </div>

        <button
          onClick={handleReset}
          disabled={!hasGameStarted}
          className={`px-6 py-3 font-bold rounded-lg transition-colors duration-200 ${
            hasGameStarted
              ? "bg-purple-500 hover:bg-purple-600 text-white cursor-pointer"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          {winner || isTie ? "Play Again" : "Restart"}
        </button>
      </div>
    </main>
  );
}

function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`text-9xl font-bold size-36 text-center transition-all duration-300
        ${isWinning ? "bg-green-500 ring-4 ring-yellow-400 scale-105" : "text-white hover:bg-slate-700"} 
      `}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
