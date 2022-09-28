import { useMemo, useState } from "react";
import ExpandedList from "../components/ExpandedList";
import CounterWithCallbackHook from "../components/CounterWithCallbackHook";
import MemoizedHeadline from "../components/MemoizedHeadline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";
import CustomHeadlineSimplified from "../components/CustomHeadlineSimplified";

export default function Slide06() {
  const slide = 6;
  const types = useMemo(
    () => ["Objects", "Arrays", "Functions", "Elements", "Components"],
    []
  );
  const headlineClasses = "text-xl font-semibold mb-2";
  const headlineText = "These data types will cause extra renders";

  const [exampleValue, setExampleValue] = useState(false);

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <MemoizedHeadline
          text={`Slide ${slide}: Fixing the Problematic Data Types`}
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
        <SlideButton
          slideDisplayNumber={slide - 1}
          slideNumber={"0" + (slide - 1)}
          prefix="Previous"
        />
        <SlideButton
          slideDisplayNumber={slide + 1}
          slideNumber={"0" + (slide + 1)}
          prefix="Next"
        />
      </div>
    </main>
  );
}
