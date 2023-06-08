import { useState } from "react";

export function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("clicked my button");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Clicked {count} times</p>
    </div>
  );
}
