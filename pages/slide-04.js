import Counter from "../components/Counter"
import MemoizedHeadline from "../components/MemoizedHeadline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"

export default function Slide04() {
  const slide = 4
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <MemoizedHeadline
            text={`Slide ${slide}: Optimizing with React.memo()`}
          />
        </Counter>
        <Rule
          number={slide}
          text={"Use React.memo to optimize re-rendering for a given component"}
        />
        <Rule number={slide + 0.1} text={"Dev Tools sometimes lies"} />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
