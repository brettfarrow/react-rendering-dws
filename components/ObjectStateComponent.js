import React from "react"

function ObjectStateComponent({ example }) {
  const { count } = example
  return <div>A different count: {count}</div>
}

export default React.memo(ObjectStateComponent)
