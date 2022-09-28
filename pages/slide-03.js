import Counter from "../components/Counter"
import Headline from "../components/Headline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"

export default function Slide03() {
  const slide = 3
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={`Slide ${slide}: Moving component children`} />
        <Counter />
        <Rule
          number={slide}
          text={"Refactoring is often better than using the children prop"}
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
