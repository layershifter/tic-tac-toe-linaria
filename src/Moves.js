import React from "react";
import { styled } from "@linaria/react";

const MoveButton = styled.button`
  min-width: 120px;
`;

const MoveListItem = styled.li`
  margin-top: 10px;
`;

export function Moves({ history, jumpToMove }) {
  const moves = history.map((_, index) => (
    <MoveListItem key={index}>
      <Move number={index} onClick={() => jumpToMove(index)} />
    </MoveListItem>
  ));

  return <ol>{moves}</ol>;
}

export function Move({ number, onClick }) {
  let description = "Go to game start.";
  if (number > 0) {
    description = `Go to move ${number}.`;
  }

  return <MoveButton onClick={onClick}>{description}</MoveButton>;
}
