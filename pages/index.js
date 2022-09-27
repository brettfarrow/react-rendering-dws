import Link from "next/link";
import Headline from "../components/Headline";
import SlideButton from "../components/SlideButton";

export default function Home() {
  const repoLink = "https://github.com/brettfarrow/react-rendering-dws";
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <Headline text={"Welcome to a Guide to React Rendering"} />
        <h2>
          Example code can be found on{" "}
          <Link href={repoLink}>
            <a className="text-sky-400">GitHub</a>
          </Link>
        </h2>
        <SlideButton slideDisplayNumber={0} slideNumber="00" prefix="Next" />
      </div>
    </main>
  );
}
