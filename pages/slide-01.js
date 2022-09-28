import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";
import useRandomColor from "../hooks/useRandomColor";

export default function Slide01() {
  const slide = 1;
  const randomColor = useRandomColor();
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={`Slide ${slide}: Stateful Hooks`} />
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
