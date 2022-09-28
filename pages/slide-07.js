import { useMemo, useState } from "react"
import ExpandedList from "../components/ExpandedList"
import ItDepends from "../components/ItDepends"
import MemoizedHeadline from "../components/MemoizedHeadline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"
import CustomHeadlineSimplified from "../components/CustomHeadlineSimplified"
import ObjectStateTest from "../components/ObjectStateTest"

export default function Slide07() {
  const slide = 7
  const considerations = [
    "Not all renders need to be eliminated",
    "You're usually better off optimizing the slowest render instead of minimizing renders",
    "Know your target / performance budget",
  ]

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <MemoizedHeadline
          text={`Slide ${slide}: Should you refactor all your code?`}
        />
        <ItDepends />
        <CustomHeadlineSimplified
          className={"mt-4 mb-2 text-xl font-semibold"}
          text={"Things you should consider:"}
        />
        <ExpandedList list={considerations} />
        <CustomHeadlineSimplified
          className={"mt-4 mb-2 text-xl font-semibold"}
          text={"Recommended reading:"}
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
