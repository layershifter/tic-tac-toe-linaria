import React from "react";
import { Board } from "./Board";
import { Moves } from "./Moves";
import { useState } from "react";

import { styled } from "@linaria/react";

const NewGameBtn = styled.button`
  margin-bottom: 20px;
`;

const GameInfo = styled.div`
  margin-bottom: 20px;
`;

const GameBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewGame = ({ onClick }) => (
  <NewGameBtn onClick={onClick}>New Game</NewGameBtn>
);

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
    <div className="game-with-menu">
      <NewGame onClick={handleNewGame} />
      <GameBox>
        <div className="game-board">
          <Board squares={squares} xIsNext={xIsNext} onPlay={onPlay} />
        </div>
        <GameInfo>
          <Moves history={history} jumpToMove={jumpToMove} />
        </GameInfo>
      </GameBox>
    </div>
  );
}
