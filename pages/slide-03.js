import Counter from "../components/Counter";
import Headline from "../components/Headline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide03() {
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={"Slide 3"} />
        <Counter />
        <Rule
          number={3}
          text={"Refactoring is often better than using the children prop"}
        />
        <SlideButton
          slideDisplayNumber={2}
          slideNumber="02"
          prefix="Previous"
        />
        <SlideButton slideDisplayNumber={4} slideNumber="04" prefix="Next" />
      </div>
    </main>
  );
}
