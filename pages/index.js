import Link from "next/link";

export default function Home() {
  const repoLink = "https://github.com/brettfarrow/react-rendering-dws";
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-bold">
          Welcome to a Guide to React Rendering
        </h1>
        <h2>
          Example code can be found on{" "}
          <Link href={repoLink}>
            <a className="text-sky-400">GitHub</a>
          </Link>
        </h2>
        <div className="mt-20 text-center">
          <Link href="/slide-00">
            <a className="text-sky-400">Next Slide: 00</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
