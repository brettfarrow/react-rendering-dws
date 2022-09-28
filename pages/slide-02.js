import Counter from "../components/Counter"
import Headline from "../components/Headline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"

export default function Slide02() {
  const slide = 2

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <Headline text={`Slide ${slide}: Parents and children`} />
        </Counter>
        <Rule
          number={slide}
          text={
            "When a parent re-renders, all of its children will re-render by default"
          }
        />
        <Rule
          number={slide + 0.1}
          text={
            "Combined with state changes, this can cause entire pages to re-render"
          }
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
