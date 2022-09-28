import Link from "next/link"
import Headline from "../components/Headline"
import SlideButton from "../components/SlideButton"

export default function Home() {
  const repoLink = "https://github.com/brettfarrow/react-rendering-dws"
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={"Welcome to a Guide to React Rendering"} />
        <p className="mt-5">
          The code for these slides can be found on{" "}
          <Link href={repoLink}>
            <a className="font-semibold text-sky-400 underline">GitHub</a>
          </Link>
        </p>
        <p className="mt-3">
          We will start with expected behavior and then get weirder as we go.
        </p>
        <p className="mt-3">
          But before we get started, we will configure React DevTools to help us
          visualize and debug renders.
        </p>
        <ol className="mt-3 list-decimal">
          <li>Open the Profiler tab and open the settings</li>
          <li>
            Under General, enable{" "}
            <pre>Highlight updates when components render</pre>
          </li>
          <li>
            Under Profiler, enable{" "}
            <pre>Record why each component rendered while profiling</pre>
          </li>
          <li>
            We can then hit the record button to understand how many renders
            happen and why they occur
          </li>
        </ol>
        <SlideButton slideDisplayNumber={0} slideNumber="00" prefix="Next" />
      </div>
    </main>
  )
}
