import { useMemo, useState } from "react";
import CounterButton from "./CounterButton";

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const buttonClasses = "w-28 h-10 rounded bg-black text-white mx-2 my-4";

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      {children}
      <h2 className="my-3 text-xl">Current count: {count}</h2>
      <CounterButton
        className={buttonClasses}
        onClick={incrementCount}
        text="Increment"
      />
      <CounterButton
        className={buttonClasses}
        onClick={decrementCount}
        text="Decrement"
      />
    </>
  );
}
