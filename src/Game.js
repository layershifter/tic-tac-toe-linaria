import { Board } from "./Board";
import { Moves } from "./Moves";
import { useState } from "react";

export function Game() {
  const initialHistory = [new Array(9).fill(null)];

  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState(initialHistory);

  const squares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function onPlay(nextSquares) {
    const currentHistory = history.slice(0, currentMove + 1);

    const nextHistory = [...currentHistory, nextSquares];
    const nextMove = nextHistory.length - 1;

    setHistory(nextHistory);
    setCurrentMove(nextMove);
  }

  function jumpToMove(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleNewGame() {
    setHistory(initialHistory);
    setCurrentMove(0);
  }

  return (
    <div class="game-with-menu">
      <button className="game-menu" onClick={handleNewGame}>
        New Game
      </button>
      <div className="game">
        <div className="game-board">
          <Board squares={squares} xIsNext={xIsNext} onPlay={onPlay} />
        </div>
        <div className="game-info">
          <Moves history={history} jumpToMove={jumpToMove} />
        </div>
      </div>
    </div>
  );
}
