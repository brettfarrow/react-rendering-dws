import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide00() {
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={"Slide 0"} />
        <Counter />
        <Rule
          number={0}
          text={"Prop and state changes will cause re-renders"}
        />
        <SlideButton slideDisplayNumber={1} slideNumber="01" prefix="Next" />
      </div>
    </main>
  );
}
