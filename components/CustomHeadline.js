import React from "react"

function CustomHeadline({ configObj }) {
  const { className, text } = configObj
  return <h2 className={className}>{text}</h2>
}

export default React.memo(CustomHeadline)
