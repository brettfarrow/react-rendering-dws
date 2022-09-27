import { useState } from "react";

export default function Rule({ number, text }) {
  const [hidden, setHidden] = useState(true);
  const removeHidden = () => {
    setHidden(false);
  };
  return (
    <h3 className="text-xl mt-10">
      Rule #{number}:{" "}
      <span className={hidden ? "blur-md" : ""} onClick={removeHidden}>
        {text}
      </span>
    </h3>
  );
}
