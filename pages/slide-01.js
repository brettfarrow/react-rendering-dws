import Counter from "../components/Counter"
import Headline from "../components/Headline"
import Rule from "../components/Rule"
import useRandomColor from "../hooks/useRandomColor"
import NavigationButtons from "../components/NavigationButtons"

export default function Slide01() {
  const slide = 1
  const randomColor = useRandomColor()
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={`Slide ${slide}: Stateful hooks`} />
        <h2 className="font-semibold" style={{ color: randomColor }}>
          Example text
        </h2>
        <Counter />
        <Rule
          number={1}
          text={"Stateful hooks are someone else's state that you're consuming"}
        />
        <Rule
          number={1.1}
          text={
            "useContext, useReducer, and custom hooks with state all cause re-renders"
          }
        />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}
