import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide01() {
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <Headline text={"Slide 1"} />
        </Counter>
        <Rule
          number={1}
          text={
            "When a parent re-renders, all of its children will re-render (unless...)"
          }
        />
        <SlideButton
          slideDisplayNumber={0}
          slideNumber="00"
          prefix="Previous"
        />
        <SlideButton slideDisplayNumber={2} slideNumber="02" prefix="Next" />
      </div>
    </main>
  );
}
