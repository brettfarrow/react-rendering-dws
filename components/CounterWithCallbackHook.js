import React, { useCallback, useState } from "react"
import MemoizedCounterButton from "./MemoizedCounterButton"

function CounterWithCallbackHook() {
  const [count, setCount] = useState(0)
  const buttonClasses = "w-28 h-10 rounded bg-black text-white m-2"

  const incrementCount = useCallback(() => {
    setCount((prevCount) => ++prevCount)
  }, [])

  const decrementCount = useCallback(() => {
    setCount((prevCount) => --prevCount)
  }, [])

  return (
    <>
      <h2 className="my-3 text-xl">Current count: {count}</h2>
      <MemoizedCounterButton
        className={buttonClasses}
        onClick={incrementCount}
        text="Increment"
      />
      <MemoizedCounterButton
        className={buttonClasses}
        onClick={decrementCount}
        text="Decrement"
      />
    </>
  )
}

export default React.memo(CounterWithCallbackHook)
