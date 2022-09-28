import React, { useState } from "react"
import ObjectStateComponent from "./ObjectStateComponent"

export default function ObjectStateTest() {
  const [exampleState, setExampleState] = useState({ count: 0 })
  // This child does not re-render when it's memoized despite taking an object as a prop.
  // This is because the state is a stable ref to the same object rather than one with the same value.
  return <ObjectStateComponent example={exampleState} />
}
