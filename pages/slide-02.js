import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide02() {
  const slide = 2;

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <Headline text={`Slide ${slide}`} />
        </Counter>
        <Rule
          number={slide}
          text={
            "When a parent re-renders, all of its children will re-render by default"
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
