import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide03() {
  const slide = 3;
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={`Slide ${slide}`} />
        <Counter />
        <Rule
          number={slide}
          text={"Refactoring is often better than using the children prop"}
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
