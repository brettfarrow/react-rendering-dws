import { useMemo } from "react";
import Counter from "../components/Counter";
import Headline from "../components/Headline";
import MemoizedHeadline from "../components/MemoizedHeadline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide02() {
  const headlineChild = useMemo(() => <Headline text={"Slide 2"} />, []);

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <Headline text={"Slide 2"} />
        </Counter>
        <Rule
          number={2}
          text={
            "When a parent re-renders, all of its children will re-render by default"
          }
        />
        <SlideButton
          slideDisplayNumber={1}
          slideNumber="01"
          prefix="Previous"
        />
        <SlideButton slideDisplayNumber={3} slideNumber="03" prefix="Next" />
      </div>
    </main>
  );
}
