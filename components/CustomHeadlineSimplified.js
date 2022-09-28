import React from "react"

function CustomHeadline({ className, text }) {
  return <h2 className={className}>{text}</h2>
}

export default React.memo(CustomHeadline)
