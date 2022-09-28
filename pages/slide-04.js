import Counter from "../components/Counter";
import MemoizedHeadline from "../components/MemoizedHeadline";
import Rule from "../components/Rule";
import SlideButton from "../components/SlideButton";

export default function Slide04() {
  const slide = 4;
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Counter>
          <MemoizedHeadline text={`Slide ${slide}`} />
        </Counter>
        <Rule
          number={slide}
          text={"Use React.memo to optimize re-rendering for a given component"}
        />
        <Rule number={slide + 0.1} text={"Dev Tools sometimes lies"} />
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
