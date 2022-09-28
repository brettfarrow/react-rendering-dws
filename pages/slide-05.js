import { useState } from "react"
import Counter from "../components/Counter"
import CustomHeadline from "../components/CustomHeadline"
import ExpandedList from "../components/ExpandedList"
import MemoizedHeadline from "../components/MemoizedHeadline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"

export default function Slide05() {
  const slide = 5
  const types = ["Objects", "Arrays", "Functions", "Elements", "Components"]
  const headlineConfig = {
    className: "text-xl font-semibold mb-2",
    text: "These data types will cause extra renders",
  }

  const [exampleValue, setExampleValue] = useState(false)

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <MemoizedHeadline text={`Slide ${slide}: Problematic data types`} />
        <Counter />
        <CustomHeadline configObj={headlineConfig} />
        <ExpandedList list={types} />
        <button
          className="mx-2 my-4 h-10 w-28 rounded bg-red-700 text-white"
          onClick={() => setExampleValue(!exampleValue)}
        >
          Force Render
        </button>
        <Rule
          number={slide}
          text={
            "Primitive types are compared by value; all others are compared by reference"
          }
        />
        <Rule
          number={slide + 0.1}
          text={
            "Components which accept more complex types often need to be refactored"
          }
        />
        <Rule
          number={slide + 0.2}
          text={"Or their parents need to memoize the props before passing"}
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
