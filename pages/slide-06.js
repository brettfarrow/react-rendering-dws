import { useMemo, useState } from "react"
import ExpandedList from "../components/ExpandedList"
import CounterWithCallbackHook from "../components/CounterWithCallbackHook"
import MemoizedHeadline from "../components/MemoizedHeadline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"
import CustomHeadlineSimplified from "../components/CustomHeadlineSimplified"
import ObjectStateTest from "../components/ObjectStateTest"

export default function Slide06() {
  const slide = 6
  const types = useMemo(
    () => ["Objects", "Arrays", "Functions", "Elements", "Components"],
    []
  )
  const headlineClasses = "text-xl font-semibold mb-2"
  const headlineText = "These data types will cause extra renders"

  const [exampleValue, setExampleValue] = useState(false)

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <MemoizedHeadline
          text={`Slide ${slide}: Fixing the problems with hooks`}
        />
        <CounterWithCallbackHook />
        <CustomHeadlineSimplified
          className={headlineClasses}
          text={headlineText}
        />
        <ExpandedList list={types} />
        <button
          className="mx-2 my-4 h-10 w-28 rounded bg-red-700 text-white"
          onClick={() => setExampleValue(!exampleValue)}
        >
          Force Render
        </button>
        <Rule
          number={slide}
          text={"useMemo is the ideal hook for memoizing objects or arrays"}
        />
        <Rule
          number={slide + 0.1}
          text={
            "useCallback is the same thing but an easier syntax designed for memoizing functions"
          }
        />
        <Rule
          number={slide + 0.2}
          text={
            "useRef does the same thing technically but may not be the best semantic choice"
          }
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
