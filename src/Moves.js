export function Moves({ history, jumpToMove }) {
  const moves = history.map((_, index) => (
    <li key={index}>
      <Move number={index} onClick={() => jumpToMove(index)} />
    </li>
  ));

  return <ol>{moves}</ol>;
}

export function Move({ number, onClick }) {
  let description = "Go to game start.";
  if (number > 0) {
    description = `Go to move ${number}.`;
  }

  return <button onClick={onClick}>{description}</button>;
}
