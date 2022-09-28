import Counter from "../components/Counter"
import Headline from "../components/Headline"
import Rule from "../components/Rule"
import NavigationButtons from "../components/NavigationButtons"

export default function Slide00() {
  const slide = 0
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={`Slide ${slide}: The basics`} />
        <Counter />
        <Rule
          number={slide}
          text={"Prop and state changes will cause re-renders"}
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
