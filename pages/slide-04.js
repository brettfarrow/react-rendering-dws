import Counter from "../components/Counter";
import MemoizedHeadline from "../components/MemoizedHeadline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide04() {
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <MemoizedHeadline text={"Slide 4"} />
        </Counter>
        <Rule
          number={4}
          text={"Use React.memo to optimize re-rendering for a given component"}
        />
        <Rule number={4.1} text={"Dev Tools sometimes lies"} />
        <SlideButton
          slideDisplayNumber={3}
          slideNumber="03"
          prefix="Previous"
        />
        <SlideButton slideDisplayNumber={5} slideNumber="05" prefix="Next" />
      </div>
    </main>
  );
}
