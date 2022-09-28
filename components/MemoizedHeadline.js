import React from "react"

function MemoizedHeadline({ text }) {
  return <h1 className="text-3xl font-bold">{text}</h1>
}

export default React.memo(MemoizedHeadline)
