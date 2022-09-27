import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide01() {
  const slide = 1;
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <Headline text={"Slide 1"} />
        </Counter>
        <Rule
          number={1}
          text={"Stateful hooks are someone else's state that you're consuming"}
        />
        <Rule
          number={1.1}
          text={
            "useContext, useReducer, and custom hooks with state all trigger re-renders"
          }
        />
        <SlideButton
          slideDisplayNumber={0}
          slideNumber="00"
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
