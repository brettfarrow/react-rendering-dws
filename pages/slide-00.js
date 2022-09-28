import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide00() {
  const slide = 0;
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={`Slide ${slide}: The Basics`} />
        <Counter />
        <Rule
          number={slide}
          text={"Prop and state changes will cause re-renders"}
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
