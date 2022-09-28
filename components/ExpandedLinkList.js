import React from "react"

function ExpandedLinkList({ list }) {
  return (
    <ul className="list-disc">
      {list.map((item, index) => (
        <li className="ml-3 list-inside" key={`list-item-${index}`}>
          <a className="text-sky-400" href={item.href}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(ExpandedLinkList)
