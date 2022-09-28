import { useState } from "react"

export default function Rule({ number, text }) {
  const [hidden, setHidden] = useState(true)
  const removeHidden = () => {
    setHidden(false)
  }
  return (
    <h3 className="mt-10 text-xl">
      Rule #{number}:{" "}
      <span
        className={`${hidden ? "ml-3 blur-md" : ""}`}
        onClick={removeHidden}
      >
        {text}
      </span>
    </h3>
  )
}
