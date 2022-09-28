import React from "react";

function ExpandedList({ list }) {
  return (
    <ul className="list-disc">
      {list.map((item) => (
        <li className="ml-3 list-inside" key={`list-item-${item}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default React.memo(ExpandedList);
