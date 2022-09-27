import React from "react";

function MemoizedCounterButton({ className, text, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default React.memo(MemoizedCounterButton);
