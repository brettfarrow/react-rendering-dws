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
        <Rule
          number={slide + 0.1}
          text={
            "Not all re-renders result in DOM elements being created/destroyed"
          }
        />
        <Rule
          number={slide + 0.2}
          text={"This is why the key prop is important!"}
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
